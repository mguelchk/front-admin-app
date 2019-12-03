import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  usuario : Usuario;
  registraUsuarioOn : boolean;

  constructor(
    private usuarioService : UsuarioService,
    private router : Router,
  ) { }

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

  ngOnInit() {
    init_plugins();
    this.registraUsuarioOn = false;
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      terminos: new FormControl(false, Validators.required),
    }, {validators: this.validaPassword('password','password2') });

    this.forma.setValue({
      nombre: 'gillian0',
      correo: 'gilliancosh@gmail.com',
      telefono: '2233441122',
      password: '123456',
      password2: null,
      terminos: false,
    });
  }

  registrarUsuario() {
    if(this.forma.invalid){
      return;
    }
    if(!this.forma.value.terminos){
      console.log("Debe aceptar terminos");
      swal('Importante', 'Debe de aceptar todos los terminos', 'warning');
      return;
    }
    this.usuario = new Usuario(
      this.forma.value.nombre, 
      this.forma.value.nombre,  
      this.forma.value.password, 
      this.forma.value.correo, 
      null, 
      this.forma.value.nombre, 
      this.forma.value.telefono);
      console.log(this.usuario);

      this.registraUsuarioOn = true;
      this.usuarioService.crearUsuario(this.usuario).subscribe(response => {
        
        if(response.ok){
          swal('Felicidades', 'Se envio la informacion a tu correo', 'success');
          this.router.navigate(['/dashboard']);
        } else if (response.message){
          swal('Error', response.message, 'warning');
          this.registraUsuarioOn = false;
        }
    });
  }

}
