import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { ConsultarOperacionesComponent } from './paginas/consultar-operaciones/consultar-operaciones.component'
import { ConsultarSaldoComponent } from './paginas/consultar-saldo/consultar-saldo.component';
import { IngresarDineroComponent } from './paginas/ingresar-dinero/ingresar-dinero.component';
import { perfilComponent } from './paginas/perfil/perfil.component';
import { RegistrarUsuarioComponent } from './paginas/registrar-usuario/registrar-usuario.component';
import { RetirarDineroComponent } from './paginas/retirar-dinero/retirar-dinero.component';
import { TransferenciaComponent } from './paginas/transferencia/transferencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpercionesService } from './services/operciones.service';
import { CuentasService } from './services/cuentas.service';
import { ClientesService } from './services/clientes.service';
import { DireccionesService } from './services/direcciones.service';
import { LocalidadesService } from './services/localidades.service';
import { ProvinciasService } from './services/provincias.service';
import { TipoOperacionesService } from './services/tipo-operaciones.service';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [OpercionesService, ClientesService ,CuentasService, DireccionesService, LocalidadesService, OpercionesService, ProvinciasService, TipoOperacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
