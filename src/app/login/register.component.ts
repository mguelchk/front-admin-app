import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
//import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  usuario : Usuario;

  constructor(
    // private _crearUsuario : CrearUsuario,
    // //private router : Router,
    // private crearUsuarioService : CrearUsuarioService
  ) { }

  validaPassword( campo1: string, campo2: string) {
    return ( group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if ( pass1 === pass2 ){
        return null;
      }
      return { 
        validaPassword: true 
      };
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      terminos: new FormControl(false, Validators.required),
    }, {validators: this.validaPassword('password','password2') });

    this.forma.setValue({
      nombre: 'JuanTest',
      correo: 'Juan@correo.com',
      telefono: '2233441122',
      password: '123456',
      password2: '123456',
      terminos: true,
    });
    // if(this._crearUsuario.isAuthenticated()){
    //   this.router.navigate(['/dashboard']);
    // }
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
    //console.log('forma valida', this.forma.valid);
    //console.log(this.forma.value);
    this.usuario = new Usuario(
      this.forma.value.nombre, 
      null,  
      this.forma.value.password, 
      this.forma.value.correo, 
      null, 
      null, 
      this.forma.value.telefono);
      console.log(this.usuario);
    //this._crearUsuario.registrar(this.usuario)
  }

}
