import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url="https://localhost:44393/api/Cliente";

  constructor(private http:HttpClient) { }

  ObtenerCliente(DNI:number){
    return this.http.get<any>(this.url+"?DNI="+DNI.toString());
  }
}

export class Cliente
{
  DNI:number | undefined;
  contrasena:string="";
  mail:string="";
  nombre:string="";
  apellido:string="";
  id_direccion:any=null;
}

export class LoginCuneta {
  UserName:string="";
  Password:string="";
  Token:string="{}";
  Id_cliente:number=0;
  CVU:string="";
}
