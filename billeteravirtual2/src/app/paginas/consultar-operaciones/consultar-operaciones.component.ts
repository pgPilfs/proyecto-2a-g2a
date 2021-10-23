import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { OperacionesService } from 'src/app/services/operaciones.service';
const ID_CLIENTE = 'auth-id';
const CVU = 'auth-cvu';

@Component({
  selector: 'app-consultar-operaciones',
  templateUrl: './consultar-operaciones.component.html',
  styleUrls: ['./consultar-operaciones.component.css']
})

export class ConsultarOperacionesComponent implements OnInit {
 mostrar_movimientos = true;
 hoy = new Date();
 movimientos: any;
 cvu = String(localStorage.getItem(CVU));
 constructor(private operacionesService:OperacionesService)
 {

} 

  ngOnInit(): void {
    //"0340100800100586333009"
    this.operacionesService.ObtenerUltimosMovimientos(this.cvu).subscribe(data =>{
      console.log(data)
      this.movimientos = data;
    })
  }
}
