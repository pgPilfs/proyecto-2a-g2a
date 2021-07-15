import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { RegistrarUsarioComponent } from './pages/registrar-usario/registrar-usario.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ConsultarOperecionesComponent } from './pages/consultar-opereciones/consultar-opereciones.component';
import { ConsultarSaldoComponent } from './pages/consultar-saldo/consultar-saldo.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { RetirarDineroComponent } from './pages/retirar-dinero/retirar-dinero.component';
import { IngresarDineroComponent } from './pages/ingresar-dinero/ingresar-dinero.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    RegistrarUsarioComponent,
    LoginComponent,
    PrincipalComponent,
    TransferenciaComponent,
    ConsultarOperecionesComponent,
    ConsultarSaldoComponent,
    PrestamoComponent,
    RetirarDineroComponent,
    IngresarDineroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
