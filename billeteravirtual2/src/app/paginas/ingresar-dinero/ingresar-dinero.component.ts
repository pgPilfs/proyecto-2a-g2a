import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent implements OnInit {

  dineroIngreso = new FormControl ('');

  constructor() { }

  ngOnInit(): void {
  }

}
