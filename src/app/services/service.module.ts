import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  UsuarioService,
  SesionService,
  SidebarService,
  EstadoService,
  AreaService,
  VacanteService,
  AuthService,
  PostulacionService,
  AuthGuard
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    UsuarioService,
    SidebarService,
    SesionService,
    EstadoService,
    AreaService,
    VacanteService,
    AuthService,
    PostulacionService,
    AuthGuard
  ],
  declarations: []
})
export class ServiceModule { }
