import { Component, OnInit } from '@angular/core';
const NOMBRE = 'auth-nombre';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class perfilComponent implements OnInit {
  nombre = String(localStorage.getItem(NOMBRE))
  constructor() { }

  ngOnInit(): void {
  }

}
