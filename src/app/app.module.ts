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
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BusquedaComponent,
    pageWebComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    FormsModule,
    PageModule,ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
