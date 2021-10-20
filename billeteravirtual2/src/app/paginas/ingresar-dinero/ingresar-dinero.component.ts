import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ClientesService } from 'src/app/services/clientes.service';
import { OperacionesService , Operacion  } from 'src/app/services/operaciones.service';
const ID_CLIENTE = 'auth-id';
const CVU = 'auth-cvu';
>>>>>>> Stashed changes

@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }
=======
  cantidad:any;
  hoy = new Date();
  id_cliente =Number(localStorage.getItem(ID_CLIENTE));
  cvu = String(localStorage.getItem(CVU));
  cliente:any;
  operacion:Operacion= {Id_operacion:-1,Tipo_operacion: 3,Id_emisor:"-1",Id_destinatario:this.cvu,Monto:0,Fecha:this.hoy}
  
  constructor(private operacionesService:OperacionesService,private clientesService:ClientesService) 
  {
   }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.clientesService.ObtenerCliente(this.id_cliente).subscribe(data =>{
      console.log(data)
      
      this.cliente = data; 
      console.log(this.cliente)})
  }
  RegistrarIngreso(){
    //datos del cliente
    this.operacion.Monto = this.cantidad
    console.log(this.operacion)
    console.log("el monto es:",this.operacion.Monto)
    this.operacionesService.CrearOperacion(this.operacion)
    console.log(this.operacion.Monto)
    console.log(this.cantidad)
    alert("Transferencia realizada. El ingreso fue efectuado")
  }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
}
