import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  url="https://localhost:44393/api/Cuenta?CVU={CVU}";
  constructor(private http:HttpClient) { }
}
