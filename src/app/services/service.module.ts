import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './shared/sidebar.service';

import {
  SharedService,
  UsuarioService,
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
    AuthGuard
  ],
  declarations: []
})
export class ServiceModule { }
