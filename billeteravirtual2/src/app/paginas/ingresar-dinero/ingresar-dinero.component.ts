import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OpercionesService } from 'src/app/services/operciones.service';

@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent implements OnInit {

  DineroIngresado = true

  constructor(OperacinesService:OpercionesService) 
  {

   }

  ngOnInit(): void {
  }

}
