import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.form = this.formBuilder.group(
      {
        usuario: ['', [Validators.required, Validators.minLength(2) ,Validators.maxLength(15)]],
        contra: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]],
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
