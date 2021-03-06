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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionesService } from './services/operaciones.service';
import { CuentasService } from './services/cuentas.service';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/Auth/interceptor.service';
import { NavComponent } from './paginas/nav/nav.component';
import { PrincipalDatosComponent } from './paginas/principal-datos/principal-datos.component';

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
    NavComponent,
    PrincipalDatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [OperacionesService, ClientesService ,CuentasService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
