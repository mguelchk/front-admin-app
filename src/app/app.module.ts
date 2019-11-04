import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PuestoComponent } from './pages/puesto/puesto.component';
import { ClienteComponent } from './pages/clientes/cliente.component';
import { VacanteComponent } from './pages/vacante/vacante.component';
import { CandidatoComponent } from './pages/candidatos/candidato.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EmpleoComponent } from './pages/empleo/empleo.component';
import { BusquedaComponent } from './pages/empleo/busqueda.component';
import { pageWebComponent } from './page-web/pageWeb.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    ClienteComponent,
    PuestoComponent,
    VacanteComponent,
    CandidatoComponent,
    PerfilComponent,
    EmpleoComponent,
    BusquedaComponent,
    pageWebComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
