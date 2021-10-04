import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  url="https://localhost:44393/api/Direccion";
  constructor(private http:HttpClient) { }
}
