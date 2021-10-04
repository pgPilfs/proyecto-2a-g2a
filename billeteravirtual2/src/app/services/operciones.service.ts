import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OpercionesService {
  url="https://localhost:44393/api/Operacion?CVU={CVU}";
  constructor(private http:HttpClient) { }
   
  ObtenerUltimosMovimientos(id:number)
    {
    return this.http.get<any>(this.url="/"+id.toString());
  }
}
