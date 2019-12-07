import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ClienteComponent } from './clientes/cliente.component';
import { AreaComponent } from './area/area.component';
import { VacanteComponent } from './vacante/vacante.component';
import { PostulacionComponent } from './postulaciones/postulaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpleoVacanteComponent } from './empleo-vacante/empleo.vacante.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetalleEmpleoVacanteComponent } from './empleo-vacante/detalle.empleo.vacante.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalAreaComponent } from '../modals/area/modal.area.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PagesComponent,
    ClienteComponent,
    AreaComponent,
    VacanteComponent,
    PostulacionComponent,
    PerfilComponent,
    EmpleoVacanteComponent,
    DetalleEmpleoVacanteComponent,
    ModalAreaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    PagesComponent,
    ClienteComponent,
    AreaComponent,
    VacanteComponent,
    PostulacionComponent,
    PerfilComponent,
    EmpleoVacanteComponent,
    DetalleEmpleoVacanteComponent,
    ModalAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES,
    AutocompleteLibModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [],
})
export class PageModule { }
