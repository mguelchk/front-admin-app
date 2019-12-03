import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ResetPasswordComponent } from './login/reset.password.component';
import { SitioWebComponent } from './sitio-web/sitio.web.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageModule } from './pages/pages.module';
import { UsuarioService } from './services/usuarios/usuario.service';
import { ServiceModule } from './services/service.module';
import { VacanteUsuarioComponent } from './sitio-web/vacantes/vacante.usuario.component';
import { DetalleVacanteComponent } from './sitio-web/vacantes/detalle-vacante/detalle.vacante.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SitioWebComponent,
    VacanteUsuarioComponent,
    DetalleVacanteComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    FormsModule,
    PageModule,
    ServiceModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
