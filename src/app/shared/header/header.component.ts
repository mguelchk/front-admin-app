import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario :Usuario;
  constructor(
    private usuarioService: UsuarioService, private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    console.log(this.usuario);
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }

}
