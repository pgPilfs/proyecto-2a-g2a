import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OperacionesService {
  url='https://localhost:44393/api/Operacion';
  constructor(private http:HttpClient) { }
   
  ObtenerUltimosMovimientos(CVU:string)
    {
    return this.http.get<Array<Operacion>>(this.url+"?CVU="+CVU);
  }

  CrearOperacion(operacion:Operacion)
  {
    //this.http.post<Operacion>(this.url, operacion);
    this.http.post<any>(this.url, operacion).subscribe(data => {
        console.log('operacion');
    });
  }

}
export class Operacion{
        Id_operacion?: number;
        Tipo_operacion?: number;
        Id_emisor?: string;
        Id_destinatario?: string;
        Monto?:number;
        Fecha?:Date;
}