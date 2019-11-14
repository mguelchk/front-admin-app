import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  muestraAdmin :boolean = true;
  muestraApp :boolean = true;

  constructor(
    public _sidebar: SidebarService,
  ) { }

  ngOnInit() {
    this._sidebar.cargarMenu();
   
  }

}
