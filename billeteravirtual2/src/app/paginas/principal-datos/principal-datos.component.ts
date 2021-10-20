import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Operacion, OperacionesService } from 'src/app/services/operaciones.service';
const ID_CLIENTE = 'auth-id';
@Component({
  selector: 'app-principal-datos',
  templateUrl: './principal-datos.component.html',
  styleUrls: ['./principal-datos.component.css']
})
export class PrincipalDatosComponent implements OnInit {
id_cliente = Number(localStorage.getItem(ID_CLIENTE));
cuenta:any;
cliente:any;
operacion:any;
  constructor(private cuentasService:CuentasService , private clientesService:ClientesService, private operacionesService:OperacionesService) { }

  ngOnInit(): void {
    /*this.cuentasService.ObtenerCuenta(this.id_cliente).subscribe(data =>{
      console.log(data)
      this.cuenta = data;
    
    this.clientesService.ObtenerCliente(this.cliente).subscribe(data2 =>{
      console.log(data2)
      this.cliente = data2;
    })
    this.operacionesService.ObtenerUltimosMovimientos("0340100800100586333009").subscribe(data3 =>{
      console.log(data3)
      this.operacion = data3[0];
    })

    })*/
  }

}