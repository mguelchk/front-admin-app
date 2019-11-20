import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';
import {  AuthService } from '../services/service.index';
import { SesionService } from '../services/session/session.service';

declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;

  constructor(
    private authService : AuthService,
    private router : Router,
    private sesionService : SesionService
  ) { }

  ngOnInit() {
    init_plugins();
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
   
  }

  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }
    this.usuario = new Usuario(null, forma.value.usuario, forma.value.password, null, null);
    console.log(this.usuario);
   this.authService.login(this. usuario, forma.value.recuerdame )
          .subscribe( resp => {
                    this.authService.guardarUsuario(resp.access_token);
                     if(this.sesionService.idVacante != null){
                      this.router.navigate(['/detalle-vacante'+this.sesionService.idVacante])
                     }
                    this.router.navigate(['/dashboard']);
               }, err => {
                if (err.status == 401 || err.status == 401) {
                  swal('Error Login', 'Usuario o clave incorrectas!', 'error');
                }
              } );

  }
}
