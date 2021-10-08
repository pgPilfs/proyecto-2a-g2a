import { Component, OnInit } from '@angular/core';
import { OperacionesService , Operacion} from 'src/app/services/operaciones.service';


@Component({
  selector: 'app-retirar-dinero',
  templateUrl: './retirar-dinero.component.html',
  styleUrls: ['./retirar-dinero.component.css']
})
export class RetirarDineroComponent implements OnInit {
cantidad:number = 0;
hoy = new Date();
  constructor(private operacionesService:OperacionesService) { }

  operacion = {id_operacion:-1,tipo_operacoin:4,id_emisor:"0340100800100586333009",id_destinatario:"-1",monto:this.cantidad,fecha:this.hoy}
  ngOnInit(): void {
  }
  
  RegistrarRetiro(){
    this.operacionesService.CrearOperacion(this.operacion)
    console.log(this.RegistrarRetiro)
    console.log(this.cantidad)
    alert("Transferencia realizada")
  }
}
