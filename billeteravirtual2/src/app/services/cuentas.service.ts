import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  url="https://localhost:44393/api/Cuenta";
  constructor(private http:HttpClient) 
  { 
    
  }
  
  ObtenerCuenta(id_cliente:number){
    return this.http.get<Cuenta>(this.url+"?id_cliente="+id_cliente)
  }
}
export class Cuenta{
  CVU?:string;
  id_cliente?:number;
  saldo?:number;
  fecha_alta?:Date;
  fecha_baja?:Date;
  valida?:boolean;

}