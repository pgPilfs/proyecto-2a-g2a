import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ClientesService } from 'src/app/services/clientes.service';
import { OperacionesService } from 'src/app/services/operaciones.service';
const ID_CLIENTE = 'auth-id';
const CVU = 'auth-cvu';
>>>>>>> Stashed changes

@Component({
  selector: 'app-consultar-operaciones',
  templateUrl: './consultar-operaciones.component.html',
  styleUrls: ['./consultar-operaciones.component.css']
})
export class ConsultarOperacionesComponent implements OnInit {
<<<<<<< Updated upstream
=======
 mostrar_movimientos = true;
 hoy = new Date();
 movimientos: any;
 cvu = String(localStorage.getItem(CVU));

>>>>>>> Stashed changes

  constructor() { }

  ngOnInit(): void {
<<<<<<< Updated upstream
=======
    //"0340100800100586333009"
    this.operacionesService.ObtenerUltimosMovimientos(this.cvu).subscribe(data =>{
      console.log(data)
      this.movimientos = data;
    })
>>>>>>> Stashed changes
  }
}
