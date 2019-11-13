import { Component, OnInit } from '@angular/core';

declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  muestraAdmin :boolean = true;
  muestraApp :boolean = true;
  ngOnInit() {
    init_plugins();
  }

}
