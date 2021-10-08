import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OperacionesService {
  url="https://localhost:44393/api/Operacion";
  constructor(private http:HttpClient) { }
   
  ObtenerUltimosMovimientos(CVU:string)
    {
    return this.http.get<Array<Operacion>>(this.url+"?CVU="+CVU);
  }

  CrearOperacion(operacion:Operacion)
  {
    this.http.post<Operacion>(this.url, operacion);
  }
}
export class Operacion{
        id_operacion?: number;
        tipo_operacion?: number;
        id_emisor?: string;
        id_destinatario?: string;
        monto?:number;
        fecha?:Date;
}