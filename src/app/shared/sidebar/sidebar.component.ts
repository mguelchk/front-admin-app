import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  muestraAdmin :boolean = true;
  muestraApp :boolean = true;
  usuario :Usuario;

  constructor(
  ) { }

  ngOnInit() {
   this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

}
