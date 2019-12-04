
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sitio-web',
  templateUrl: './sitio.web.component.html',
  styleUrls: ['./stylepw.css']
})
export class SitioWebComponent implements OnInit {
  inicioActivo: boolean = true;
  servicioActivo: boolean = false;
  nosotrosActivo: boolean = false;
  contactoActivo: boolean = false;
  constructor(
  ) { }

  ngOnInit() {
  }
  
  activaBoton(boton:String){
    this.inicioActivo = (boton == 'i') ;
    this.servicioActivo = (boton == 's');
    this.nosotrosActivo = (boton == 'n');
    this.contactoActivo = (boton == 'c');
  }
}
