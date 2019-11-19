import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { BusquedaComponent } from './pages/empleo/busqueda.component';
import { pageWebComponent } from './page-web/pageWeb.component';
import { FormsModule } from '@angular/forms';
import { PageModule } from './pages/pages.module';
import { UsuarioService } from './services/usuarios/usuario.service';
import { ServiceModule } from './services/service.module';
import { VacanteUsuarioComponent } from './page-web/vacantes/vacante.usuario.component';
import { DetalleVacanteComponent } from './page-web/vacantes/detalle-vacante/detalle.vacante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BusquedaComponent,
    pageWebComponent,
    VacanteUsuarioComponent,
    DetalleVacanteComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    FormsModule,
    PageModule,
    ServiceModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
