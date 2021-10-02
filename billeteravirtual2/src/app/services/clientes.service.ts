import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url="https://localhost:44393/api/Cliente?DNI={DNI}";
  constructor(private http:HttpClient) { }
}
