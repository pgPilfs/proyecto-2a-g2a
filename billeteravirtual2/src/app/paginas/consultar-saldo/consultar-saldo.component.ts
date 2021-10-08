import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.css']
})
export class ConsultarSaldoComponent implements OnInit {
   MostrarMovimientos= true;
   
  constructor(OperacinesService:OperacionesService)
   {

    }

  ngOnInit(): void {
  }

}
