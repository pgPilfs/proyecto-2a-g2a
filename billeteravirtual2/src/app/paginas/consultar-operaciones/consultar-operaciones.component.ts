import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-consultar-operaciones',
  templateUrl: './consultar-operaciones.component.html',
  styleUrls: ['./consultar-operaciones.component.css']
})
export class ConsultarOperacionesComponent implements OnInit {
 
 mostrar_movimientos = true;
 hoy = new Date();
 movimientos: any;

  constructor(private operacionesService:OperacionesService)
  {
  }
  
  ngOnInit(): void {
    this.operacionesService.ObtenerUltimosMovimientos("0340100800100586333009").subscribe(data =>{
      console.log(data)
      this.movimientos = data;
    })
  }

}
