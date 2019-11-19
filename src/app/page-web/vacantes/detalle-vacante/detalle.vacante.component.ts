
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../../services/session/session.service';

@Component({
  selector: 'app-detalle-vacante',
  templateUrl: './detalle.vacante.component.html',
  styles: []
})
export class DetalleVacanteComponent implements OnInit,OnDestroy {

  constructor(
    private router : Router,
    private sesionService : SesionService
  ) { }
 array : any[] = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {

  }


  aplicarVacante(){
    this.sesionService.agregarIdPaginaVacante('12');
    this.router.navigate(['/dashboard']);
   
  }

  ngOnDestroy(){
    this.sesionService.eliminarIdVacante();
  }
}
