import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styles: []
})
export class CandidatoComponent implements OnInit {


  titulo :String;
  constructor() { }

  ngOnInit() {
this.titulo = "Huevos a todos";
  }
  buscar(){

  }

}
