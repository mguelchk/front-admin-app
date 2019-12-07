import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { AuthService } from '../auth/auth.service';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class SidebarService {

  menus: Menu[] = [];
  usuario: Usuario;

  constructor(
    private authService: AuthService
  ) { }

  cargarMenu() {
    this.usuario = this.authService.usuarioSesion;
    if (this.usuario.roles != null) {
      this.menus = this.usuario.roles[0].menus;
    }
  }

}
