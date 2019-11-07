import { RouterModule, Routes } from '@angular/router';



import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienteComponent } from './pages/clientes/cliente.component';
import { PuestoComponent } from './pages/puesto/puesto.component';
import { VacanteComponent } from './pages/vacante/vacante.component';
import { CandidatoComponent } from './pages/candidatos/candidato.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EmpleoComponent } from './pages/empleo/empleo.component';
import { BusquedaComponent } from './pages/empleo/busqueda.component';
import { pageWebComponent } from './page-web/pageWeb.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'cliente', component: ClienteComponent },
            { path: 'puesto', component: PuestoComponent },
            { path: 'vacante', component: VacanteComponent },
            { path: 'candidato', component: CandidatoComponent },
            { path: 'perfil', component: PerfilComponent},
            { path: 'empleo', component: EmpleoComponent},
            { path: 'busqueda', component: BusquedaComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'web', component: pageWebComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
