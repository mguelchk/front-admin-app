import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  muestraAdmin :boolean = true;
  muestraApp :boolean = true;
  ngOnInit() {
  }

}
