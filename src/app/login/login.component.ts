import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';



import { UsuarioService } from '../services/service.index';
declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;

  constructor(
    private _usuarioService : UsuarioService,
    private router : Router
  ) { }

  ngOnInit() {
    init_plugins();
    if (this._usuarioService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }
    this.usuario = new Usuario(null, forma.value.usuario, forma.value.password, null, null);
    console.log(this.usuario);
   this._usuarioService.login(this. usuario, forma.value.recuerdame )
               .subscribe( resp => 
                   {
                    this._usuarioService.guardarUsuario(resp.access_token);
                     console.log(resp);
                    this.router.navigate(['/dashboard']);
               } );

  }
}
