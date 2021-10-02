import { Component, OnInit } from '@angular/core';
import { OpercionesService } from 'src/app/services/operciones.service';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.css']
})
export class ConsultarSaldoComponent implements OnInit {
   MostrarMovimientos= true;
   
  constructor(OperacinesService:OpercionesService)
   {

    }

  ngOnInit(): void {
  }

}
