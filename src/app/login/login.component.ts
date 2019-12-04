import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';
import { AuthService, UsuarioService } from '../services/service.index';
import { SesionService } from '../services/session/session.service';
import { identifierModuleUrl } from '@angular/compiler';

declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  isCollapsed: boolean;
  usuarioDb: Usuario;
  formaLogin: FormGroup;
  formaRecover: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sesionService: SesionService,
    private usuarioService: UsuarioService,

  ) { }

  ngOnInit() {
    init_plugins();
    this.isCollapsed = true;
    if (this.authService.isAuthenticated()) {
      if (this.authService.usuario.recover) {
        this.router.navigate(['/reset-password']);
      }
      this.router.navigate(['/dashboard']);
    }

    this.formaLogin = new FormGroup({
      user: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      recuerdame: new FormControl(false, Validators.required),
    });
    this.formaRecover = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
    });

  }

  ingresar() {

    if (this.formaLogin.invalid) {
      return;
    }
    this.usuario = new Usuario(null, this.formaLogin.value.user, this.formaLogin.value.password, null, null);
    this.authService.login(this.usuario, this.formaLogin.value.recuerdame)
      .subscribe(resp => {

        this.authService.guardarUsuario(resp.access_token);
        this.usuarioDb = this.authService.usuario;

        if (this.usuarioDb.recover) {
          this.router.navigate(['/reset-password']);
        } else {
          if (this.usuarioDb.roles[0].nombre == "ROLE_USER") {
            let idVacante = this.sesionService.idVacante ;
            if (idVacante!= null) {
              this.sesionService.eliminarIdVacante();
              this.router.navigate(['/detalle-empleo-vacante', idVacante]);
            } else {
              this.router.navigate(['/empleo-vacante']);
            }
          } else if ((this.usuarioDb.roles[0].nombre == "ROLE_ADMIN")) {
            this.router.navigate(['/postulaciones']);
          }
        }

      }, err => {
        if (err.status == 401 || err.status == 400) {
          swal('Error Login', 'Usuario o clave incorrectas!', 'error');
        } else {
          swal('Error', 'Servicio no disponible', 'error');
        }
      });

  }

  recoverPasword() {
    if (this.formaRecover.invalid) {
      return;
    }
    this.usuario = new Usuario(null, null, null, this.formaRecover.value.correo, null);
    console.log(this.usuario);
    this.usuarioService.restablecerUsuario(this.usuario).subscribe(response => {
      if (response.ok) {
        swal('Felicidades', 'Se envio la informacion a tu correo', 'success');
        this.router.navigate(['/login']);
        this.isCollapsed = true;
      } else if (response.message) {
        swal('Error', response.message, 'warning');
      }
      console.log(response);
    }, err => {
      if (err.status == 500) {
        swal('Error ', 'Servicio no disponible', 'error');
      } else {
        swal('Error', 'Error desconocido', 'error');
      }
    });
  }
}
