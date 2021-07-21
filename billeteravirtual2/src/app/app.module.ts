import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { ConsultarOperacionesComponent } from './paginas/consultar-operaciones/consultar-operaciones.component';
import { ConsultarSaldoComponent } from './paginas/consultar-saldo/consultar-saldo.component';
import { IngresarDineroComponent } from './paginas/ingresar-dinero/ingresar-dinero.component';
import { perfilComponent } from './paginas/perfil/perfil.component';
import { RegistrarUsuarioComponent } from './paginas/registrar-usuario/registrar-usuario.component';
import { RetirarDineroComponent } from './paginas/retirar-dinero/retirar-dinero.component';
import { TransferenciaComponent } from './paginas/transferencia/transferencia.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    ConsultarOperacionesComponent,
    ConsultarSaldoComponent,
    IngresarDineroComponent,
    perfilComponent,
    RegistrarUsuarioComponent,
    RetirarDineroComponent,
    TransferenciaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
