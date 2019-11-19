
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vacante-usuario',
  templateUrl: './vacante.usuario.component.html',
  styles: []
})
export class VacanteUsuarioComponent implements OnInit {

  constructor(
    private _usuarioService : UsuarioService,
    private router : Router
  ) { }
 array : any[] = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {
    if (this._usuarioService.isAuthenticated()) {
      this.router.navigate(['/empleo']);
    }
  }

  buscarVacantes(){
    
  }
}
