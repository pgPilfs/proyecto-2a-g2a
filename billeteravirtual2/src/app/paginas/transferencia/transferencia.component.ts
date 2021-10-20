import { Component, OnInit } from '@angular/core';
const NOMBRE = 'auth-nombre';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  nombre = String(localStorage.getItem(NOMBRE))
  constructor() { }

  ngOnInit(): void {
  }

}
