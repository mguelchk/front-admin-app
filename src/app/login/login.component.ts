import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';
import {  AuthService, UsuarioService } from '../services/service.index';
import { SesionService } from '../services/session/session.service';

declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;
  isCollapsed: boolean;

  constructor(
    private authService : AuthService,
    private router : Router,
    private sesionService : SesionService,
    private usuarioService : UsuarioService,
  ) { }

  ngOnInit() {
    init_plugins();
    this.isCollapsed = true;
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
                if (err.status == 401 || err.status == 400) {
                  swal('Error Login', 'Usuario o clave incorrectas!', 'error');
                } else {
                  swal('Error', 'Servicio no disponible', 'error');
                }
              } );

  }

  recoverPasword(forma: NgForm){
    if ( forma.invalid ) {
      return;
    }
    //console.log(forma.value.correo);
    this.usuario = new Usuario(null, null, null, forma.value.correo, null);
    console.log(this.usuario);
    this.usuarioService.restablecerUsuario(this.usuario).subscribe(response => {
      if(response.ok){
        swal('Felicidades', 'Se envio la informacion a tu correo', 'success');
        this.router.navigate(['/login']);
      } else if (response.message){
        swal('Error', response.message, 'warning');
      }
      console.log(response);
    });
  }
}
