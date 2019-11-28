import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';
import { AuthService } from '../services/auth/auth.service';
import { UsuarioService } from '../services/usuarios/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function init_plugins();


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.password.component.html',
  styleUrls: ['./login.component.css']
})
export class ResetPasswordComponent implements OnInit {

  usuarioBd: Usuario;
  usuario: Usuario;
  forma: FormGroup;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      if(!this.authService.usuario.recover){
         this.router.navigate(['/dashboard']);
      }
    }else {
      this.router.navigate(['/login']);
    }
    init_plugins();
    this.usuario = new Usuario(null, null, null, null, null);
    this.usuarioBd = this.authService.usuario;
    this.forma = new FormGroup({
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
    }, {validators: this.validaPassword('password','password2') });
  }

  cambiarPassword() {

    this.usuario.email = this.usuarioBd.email;
    this.usuarioService.actualizarPassword(this.usuario).subscribe(response => {

      if (response.ok) {
        swal('Felicidades', response.message, 'success');
        this.authService.usuario.recover =false ;
        this.router.navigate(['/dashboard']);
      } else if (response.message) {
        swal('Error', response.message, 'warning');
      }
      console.log(response);
    });
  }

  validaPassword( campo1: string, campo2: string) {
    return ( group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if((pass1 === "") && (pass2 === "")){
        return {validaPassword: true };
      }
      if ( pass1 === pass2 ){
        return {validaPassword: false };
      }
      return {validaPassword: true 
      };
    };
  }
}
