import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  muestraAdmin :boolean = true;
  muestraApp :boolean = true;

  constructor(
  ) { }

  ngOnInit() {
  }

}
