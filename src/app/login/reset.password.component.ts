import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert2';

declare function init_plugins();


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.password.component.html',
  styleUrls: ['./login.component.css']
})
export class ResetPasswordComponent implements OnInit {

  usuario : Usuario;

  constructor(

  ) { }

  ngOnInit() {
    init_plugins();
   
  }
}
