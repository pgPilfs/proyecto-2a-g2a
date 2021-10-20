import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

=======
import { CuentasService , Cuenta } from 'src/app/services/cuentas.service';
const NOMBRE = 'auth-nombre';
const ID_CLIENTE = 'auth-id';
>>>>>>> Stashed changes
@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.css']
})
export class ConsultarSaldoComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }
=======
   MostrarMovimientos= true;
   cuenta:any;  
   nombre = String(localStorage.getItem(NOMBRE))
   id_cliente =Number(localStorage.getItem(ID_CLIENTE));
  constructor(private cuentasService:CuentasService)
   {

  } 
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.cuentasService.ObtenerCuenta(this.id_cliente).subscribe(data =>{
      console.log(data)
      this.cuenta = data
      console.log(this.cuenta)
      
    })

  }

}
