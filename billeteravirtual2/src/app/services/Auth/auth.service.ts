import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginCuneta } from '../clientes.service'; 
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
const TOKEN_KEY = 'auth-token';
const ID_CLIENTE = 'auth-id';
const CVU = 'auth-cvu';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url="https://localhost:44393/api/login/authenticate";
  currentUserSubject: BehaviorSubject<LoginCuneta>;//devuelve el objeto actual 
  currentUser: Observable<LoginCuneta>;
  loggedIn= new BehaviorSubject<boolean>(false);//indica si el usario esta logeado o no 
  
  constructor(private http:HttpClient, private router:Router) {
    console.log("AUTH SERVICE WORKING");
    //localStorage es donde se guarda la informacion en el frontEnd, funciona como un diccionario de clave valor 
    // la linea 22 trae el token
    this.currentUserSubject = new  BehaviorSubject<LoginCuneta>(JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}'));

    //Lo lo pasamos a este para luego poder subcribirnos 
    this.currentUser = this.currentUserSubject.asObservable();
    
 
  }
  login(usuario: LoginCuneta): Observable<any> {
    return this.http.post<LoginCuneta>(this.url, usuario).pipe(map(data => {
      console.log(data.Token)
      localStorage.setItem(TOKEN_KEY, data.Token);
      localStorage.setItem(ID_CLIENTE,(data.Id_cliente).toString());
      localStorage.setItem(CVU, data.CVU); 
      this.currentUserSubject.next(data);
      this.loggedIn.next(true);
      console.log("PASO LOGIN")
      return data;
    }));
  }

  get usuarioAutenticado(): LoginCuneta {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

   logOut(): void {
    window.sessionStorage.clear();
    localStorage.removeItem(TOKEN_KEY);
    this.loggedIn.next(false);
    console.log("mevoy")
    this.router.navigate(['login']);
  }
}