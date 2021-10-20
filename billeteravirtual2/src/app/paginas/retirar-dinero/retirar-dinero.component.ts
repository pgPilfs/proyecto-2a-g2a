import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

=======
import { OperacionesService , Operacion} from 'src/app/services/operaciones.service';
const NOMBRE = 'auth-nombre';
const CVU = 'auth-cvu';
>>>>>>> Stashed changes
@Component({
  selector: 'app-retirar-dinero',
  templateUrl: './retirar-dinero.component.html',
  styleUrls: ['./retirar-dinero.component.css']
})
export class RetirarDineroComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit(): void {
  }

=======
cantidad:any;
nombre = String(localStorage.getItem(NOMBRE))
hoy = new Date();
cvu= String(localStorage.getItem(CVU));
  constructor(private operacionesService:OperacionesService) { }

  operacion:Operacion= {Id_operacion:-1,Tipo_operacion: 4,Id_emisor:this.cvu,Id_destinatario:"-1",Monto:0,Fecha:this.hoy}
  ngOnInit(): void {
  }
  
  RegistrarRetiro(){
    this.operacion.Monto = this.cantidad
    console.log(this.operacion)
    console.log("el monto es:",this.operacion.Monto)
    this.operacionesService.CrearOperacion(this.operacion)
    console.log(this.operacion.Monto)
    console.log(this.cantidad)
    alert("Transferencia realizada")
  }
>>>>>>> Stashed changes
}
