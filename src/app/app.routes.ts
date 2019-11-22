import { RouterModule, Routes } from '@angular/router';


import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ResetPasswordComponent } from './login/reset.password.component';
import { pageWebComponent } from './page-web/pageWeb.component';
import { VacanteComponent } from './pages/vacante/vacante.component';
import { VacanteUsuarioComponent } from './page-web/vacantes/vacante.usuario.component';
import { DetalleVacanteComponent } from './page-web/vacantes/detalle-vacante/detalle.vacante.component';


const appRoutes: Routes = [
    { path: 'web', component: pageWebComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'vacantes-usuario', component: VacanteUsuarioComponent },
    { path: 'pagina-web', component: pageWebComponent },
    { path: 'detalle-vacante', component: DetalleVacanteComponent },
    
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
