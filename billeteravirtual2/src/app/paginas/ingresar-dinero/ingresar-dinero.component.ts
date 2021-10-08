import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent implements OnInit {

  DineroIngresado = true

  constructor(OperacinesService:OperacionesService) 
  {
   }

  ngOnInit(): void {
  }
  
}
