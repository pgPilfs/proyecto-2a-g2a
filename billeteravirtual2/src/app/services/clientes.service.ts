import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url="https://localhost:44393/api/Cliente";
  url2="https://localhost:44332/api/Cuenta?CVU={CVU}";
  url3="https://localhost:44332/api/Cliente?cuil=";
  url4="https://localhost:44332/api/Cuenta?documento={documento}&cuil={cuil}&mail={mail}";
  url5="https://localhost:44332/api/Cliente?id_cliente=";

  constructor(private http:HttpClient) { }

  onCrearRegistro(usuario:Cliente):Observable<any>{
    return this.http.post<Cliente>(this.url, usuario);
  }

  onCrearCuenta(cuenta:Cuenta):Observable<Cuenta>{
    return this.http.post<Cuenta>(this.url2, cuenta);
  }

  onObtenerId(cuil:string){
    return this.http.get<any>(this.url3+cuil);
  }

  onComparar(documento:number | undefined, cuil:string, mail:string) {
    return this.http.get<any>("https://localhost:44332/api/Cuenta?documento="+documento+"&cuil="+cuil+"&mail="+mail);
  }

  onActualizarUsuario(id_cliente:number, usuario:Cliente):Observable<any>{
    return this.http.put<Cliente>(this.url5+id_cliente, usuario);
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

export class Cuenta
{
  cvu:string="";
  id_cliente:number=0;
  saldo:number=0;
  fecha_alta="";
  fecha_baja="";
}
