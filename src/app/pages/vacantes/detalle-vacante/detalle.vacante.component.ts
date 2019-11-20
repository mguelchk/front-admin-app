
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/service.index';

@Component({
  selector: 'app-detalle-vacante',
  templateUrl: './detalle.vacante.component.html',
  styles: []
})
export class DetalleVacanteComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }
 array : any[] = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  buscarVacantes(){
    
  }

  aplicarVacante(){
    
  }
}
