import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';
import { UsuarioService } from '../services/usuarios/usuario.service';

declare function init_plugins();


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.password.component.html',
  styleUrls: ['./login.component.css']
})
export class ResetPasswordComponent implements OnInit {

  usuarioBd: Usuario;
  usuario: Usuario;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      if (!this.authService.usuario.recover) {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.router.navigate(['/login']);
    }
    init_plugins();
    this.usuario = new Usuario(null, null, null, null, null);
    this.usuarioBd = this.authService.usuario;
  }

  cambiarPassword() {
    
    this.usuario.email = this.usuarioBd.email;
    console.log(this.usuario);
    this.usuarioService.actualizarPassword(this.usuario).subscribe(response => {

      if (response.ok) {
        swal('Felicidades', response.message, 'success');
        this.authService.usuario.recover = false;
        this.router.navigate(['/dashboard']);
      } else if (response.message) {
        swal('Error', response.message, 'warning');
      }
      console.log(response);
    });
  }
}
