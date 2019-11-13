import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { ClienteComponent } from './clientes/cliente.component';
import { PuestoComponent } from './puesto/puesto.component';
import { VacanteComponent } from './vacante/vacante.component';
import { CandidatoComponent } from './candidatos/candidato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { BusquedaComponent } from './empleo/busqueda.component';
import { pageWebComponent } from '../page-web/pageWeb.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PagesComponent,
    ClienteComponent,
    PuestoComponent,
    VacanteComponent,
    CandidatoComponent,
    PerfilComponent,
    EmpleoComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    PagesComponent,
    ClienteComponent,
    PuestoComponent,
    VacanteComponent,
    CandidatoComponent,
    PerfilComponent,
    EmpleoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES
  ],
  providers: [],
})
export class PageModule { }
