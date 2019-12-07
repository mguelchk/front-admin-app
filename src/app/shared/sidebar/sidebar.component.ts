import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus = Menu;
  constructor(
    public _sidebar: SidebarService,
  ) { }

  ngOnInit() {
    
    this._sidebar.cargarMenu();
   
  }

}
