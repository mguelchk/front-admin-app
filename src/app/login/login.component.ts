import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

//import swal from 'sweetalert';
declare function init_plugins();
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(
  ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    let usuario = new Usuario(null,forma.value.nombre, forma.value.password,null );
    //swal("Here's the title!", "...and here's the text!");
   //this._usuarioService.login( usuario, forma.value.recuerdame )
    //           .subscribe( correcto => this.router.navigate(['/dashboard'])  );

    // this.router.navigate([ '/dashboard' ]);

  }
}
