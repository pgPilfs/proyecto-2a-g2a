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
 movimientos=[{Operacion: "Compra", Numoperacion:123, monto:1500}];

  constructor(private operacionesService:OpercionesService) {}
  
  ngOnInit(): void {
    
  }

}
