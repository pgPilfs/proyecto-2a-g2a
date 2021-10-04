import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocalidadesService {
  url="https://localhost:44393/api/Localidad";
  constructor(private http:HttpClient) { }
}
