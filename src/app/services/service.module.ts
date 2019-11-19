import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  UsuarioService,
  SesionService,
  SidebarService,
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
    AuthGuard
  ],
  declarations: []
})
export class ServiceModule { }
