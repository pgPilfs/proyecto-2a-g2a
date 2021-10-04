import { Component, OnInit } from '@angular/core';
import { OpercionesService } from 'src/app/services/operciones.service';

@Component({
  selector: 'app-consultar-operaciones',
  templateUrl: './consultar-operaciones.component.html',
  styleUrls: ['./consultar-operaciones.component.css']
})
export class ConsultarOperacionesComponent implements OnInit {
 
 mostrar_movimientos = true;
 hoy = new Date();
 movimientos;

  constructor(private operacionesService:OpercionesService)
  {
    this.movimientos=operacionesService.ObtenerUltimosMovimientos
  }
  
  ngOnInit(): void {
    
  }

}
