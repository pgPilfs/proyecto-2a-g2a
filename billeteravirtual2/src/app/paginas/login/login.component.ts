import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginCuneta } from 'src/app/services/clientes.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginCuenta:LoginCuneta = new LoginCuneta();
  error:string="";

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router:Router) {
    
    this.form = this.formBuilder.group(
      {
        usuario: ['', [Validators.required, Validators.minLength(2) ,Validators.maxLength(15)]],
        contra: ['', [Validators.required,]] //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
      }
    )
  }

  ngOnInit(): void {
  }

  get usuarioField(){ 
    return this.form.get("usuario");
  }
  get contraField() {
    return this.form.get("contra");
  }
  get usuarioInvalid() {
    return this.usuarioField?.touched && !this.usuarioField.valid;
  }
  get contraInvalid() {
    return this.contraField?.touched && !this.contraField.valid;
  }

  onEnviar(event: Event, loginCuenta: LoginCuneta)
  {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.form.valid)
    {
      console.log(this.form.value); //se puede enviar al servidor...
      this.authService.login(this.loginCuenta)
      .subscribe(
        data => {
        console.log("DATA"+ JSON.stringify( data));
        this.router.navigate(['pagina-principal']);
        },
        error => {
         this.error = error;
        }
      );
    }
    else
    {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }
}
