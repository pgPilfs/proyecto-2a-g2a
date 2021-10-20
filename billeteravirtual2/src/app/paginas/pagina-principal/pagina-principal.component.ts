import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Operacion, OperacionesService } from 'src/app/services/operaciones.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
const ID_CLIENTE = 'auth-id';
const CVU = 'auth-cvu';
const NOMBRE = 'auth-nombre';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
id_cliente = Number(localStorage.getItem(ID_CLIENTE));
cvu= String(localStorage.getItem(CVU));
nombre = String(localStorage.getItem(NOMBRE));
cuenta:any;
cliente:any;
operacion:any;
  constructor(private cuentasService:CuentasService , private clientesService:ClientesService, private operacionesService:OperacionesService,private authService:AuthService) { }

  ngOnInit(): void {

    this.cuentasService.ObtenerCuenta(this.id_cliente).subscribe(data =>{
      this.cuenta = data;
    
    this.clientesService.ObtenerCliente(this.id_cliente).subscribe(data2 =>{
      this.cliente = data2;
      localStorage.setItem(NOMBRE, String(data2.Nombre));
    })
    this.operacionesService.ObtenerUltimosMovimientos(this.cvu).subscribe(data3 =>{
      this.operacion = data3[0];
    })

    })
  }
  Salir(){
    console.log("no me fui")
    this.authService.logOut();
  }

}
