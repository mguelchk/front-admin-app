import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteComponent } from './clientes/cliente.component';
import { AreaComponent } from './area/area.component';
import { VacanteComponent } from './vacante/vacante.component';
import { PostulacionComponent } from './postulaciones/postulaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpleoVacanteComponent } from './empleo-vacante/empleo.vacante.component';
import { DetalleEmpleoVacanteComponent } from './empleo-vacante/detalle.empleo.vacante.component';
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
            { path: 'area', component: AreaComponent },
            { path: 'vacante', component: VacanteComponent },
            { path: 'postulaciones', component: PostulacionComponent },
            { path: 'perfil', component: PerfilComponent},
            { path: 'empleo-vacante', component: EmpleoVacanteComponent},
            { path: 'detalle-empleo-vacante/:idVacante', component: DetalleEmpleoVacanteComponent},
            { path: '', redirectTo: '/pagina-web', pathMatch: 'full' }
        ]
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
