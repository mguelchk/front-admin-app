import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SidebarService {

  menu: Menu[] = [];

  constructor(
    private authService: AuthService
  ) { }

  cargarMenu() {
      this.menu = this.authService.menus;
  }

}
