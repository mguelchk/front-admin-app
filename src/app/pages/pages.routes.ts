import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './clientes/cliente.component';
import { PuestoComponent } from './puesto/puesto.component';
import { VacanteComponent } from './vacante/vacante.component';
import { CandidatoComponent } from './candidatos/candidato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { BusquedaComponent } from './empleo/busqueda.component';
import { AuthGuard } from '../services/service.index';

// Guards


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard ],
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
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
