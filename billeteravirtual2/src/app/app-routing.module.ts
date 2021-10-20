import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarOperacionesComponent } from './paginas/consultar-operaciones/consultar-operaciones.component';
import { ConsultarSaldoComponent } from './paginas/consultar-saldo/consultar-saldo.component';
import { IngresarDineroComponent } from './paginas/ingresar-dinero/ingresar-dinero.component';
import { LoginComponent } from './paginas/login/login.component';
import { NavComponent } from './paginas/nav/nav.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { perfilComponent } from './paginas/perfil/perfil.component';
import { PrincipalDatosComponent } from './paginas/principal-datos/principal-datos.component';
import { RegistrarUsuarioComponent } from './paginas/registrar-usuario/registrar-usuario.component';
import { RetirarDineroComponent } from './paginas/retirar-dinero/retirar-dinero.component';
import { TransferenciaComponent } from './paginas/transferencia/transferencia.component';
import { guardsGuard } from './services/Auth/guards.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent  },
  {path:'pagina-principal', component: PaginaPrincipalComponent  , canActivate:[guardsGuard]},
  {path:'consultar-operaciones', component: ConsultarOperacionesComponent },
  {path:'consultar-saldo', component: ConsultarSaldoComponent},
  {path:'ingresar-dinero', component: IngresarDineroComponent},
  {path:'perfil', component: perfilComponent},
  {path:'retirar-dinero', component: RetirarDineroComponent},
  {path:'transferencia', component: TransferenciaComponent},
  {path:'principal-datos', component:PrincipalDatosComponent},
  {path:'registrar-usario', component: RegistrarUsuarioComponent},
  {path:'nav', component: NavComponent },
  {path:'**', pathMatch: 'full', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
