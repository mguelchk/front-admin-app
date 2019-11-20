import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario :Usuario;
  constructor(
    private authService: AuthService, private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.authService.usuario;
    console.log(this.usuario);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
