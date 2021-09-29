import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl:'./registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  form: FormGroup;

  condiciones = "-Minimo 8 caracteres\n -Maximo 15 \n -Al menos una mayuscula\n -Al menos una minuscula \n -Al menos un dijito \n -Al nemos un caracter especial \n -no espacios en blanco "

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group(
      {
        usuario: ['', [Validators.required, Validators.minLength(2) ,Validators.maxLength(15)]],
        nombre: ['', [Validators.required,Validators.minLength(2) ,Validators.maxLength(15)]],
        apellido: ['', [Validators.required, Validators.minLength(2) ,Validators.maxLength(15)]],
        mail: ['', [Validators.required, Validators.email]],
        contra: ['', [Validators.required ,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]],
        contraRepetida: ['', [Validators.required]]
      }
    )
  }


  ngOnInit(): void {
  }
  get usuarioField(){
    return this.form.get("usuario");
  }
  get nombreField() {
    return this.form.get("nombre");
  }
  get apellidoField() {
    return this.form.get("apellido");
  }
  get mailField() {
    return this.form.get("mail");
  }
  get contraField() {
    return this.form.get("contra");
  }
  get contraRepetidaField(){
    return this.form.get("contraRepetida")
  }
  
  get usuarioInvalid() {
    return this.usuarioField?.touched && !this.usuarioField.valid;
  }
  get nombreInvalid() {
    return this.nombreField?.touched && !this.nombreField.valid;
  }
  get apellidoInvalid() {
    return this.apellidoField?.touched && !this.apellidoField.valid;
  }
  get mailInvalid() {
    return this.mailField?.touched && !this.mailField.valid;
  }
  get contraInvalid() {
    return this.contraField?.touched && !this.contraField.valid;
  }
  get contraRepetidaInvalid() {
    return this.contraRepetidaField?.touched && !this.contraRepetidaField.valid;
  }
  get contrasIguales(){
    console.log(this.contraField?.value == this.contraRepetidaField?.value)
    console.log(this.contrasIguales)
    return this.contraField?.value != this.contraRepetidaField?.value;
  }
  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}
