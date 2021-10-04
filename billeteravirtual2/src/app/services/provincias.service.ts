import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  url="https://localhost:44393/api/Provincia";
  constructor(private http:HttpClient) { }
}
