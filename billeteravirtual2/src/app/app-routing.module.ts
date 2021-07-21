import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarOperacionesComponent } from './paginas/consultar-operaciones/consultar-operaciones.component';
import { ConsultarSaldoComponent } from './paginas/consultar-saldo/consultar-saldo.component';
import { IngresarDineroComponent } from './paginas/ingresar-dinero/ingresar-dinero.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { perfilComponent } from './paginas/perfil/perfil.component';
import { RegistrarUsuarioComponent } from './paginas/registrar-usuario/registrar-usuario.component';
import { RetirarDineroComponent } from './paginas/retirar-dinero/retirar-dinero.component';
import { TransferenciaComponent } from './paginas/transferencia/transferencia.component';

const routes: Routes = [
  {path:'login', component: LoginComponent  },
  {path:'consultar-operaciones', component: ConsultarOperacionesComponent },
  {path:'consultar-saldo', component: ConsultarSaldoComponent},
  {path:'ingresar-dinero', component: IngresarDineroComponent},
  {path:'perfil', component: perfilComponent},
  {path:'pagina-principal', component: PaginaPrincipalComponent},
  {path:'registrar-usario', component: RegistrarUsuarioComponent},
  {path:'retirar-dinero', component: RetirarDineroComponent},
  {path:'transferencia', component: TransferenciaComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'registrar-usario'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
