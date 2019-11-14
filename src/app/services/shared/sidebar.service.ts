import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { UsuarioService } from '../usuarios/usuario.service';

@Injectable()
export class SidebarService {

  menu: Menu[] = [];

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  cargarMenu() {
      this.menu = this._usuarioService.menus;
  }

}
