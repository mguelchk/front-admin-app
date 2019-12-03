import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SesionService {

  idVacante: string;

  constructor(
    public http: HttpClient
  ) { }

  agregarIdPaginaVacante(idVacante : string){
    this.idVacante = idVacante
    sessionStorage.setItem("vacante",idVacante);
  } 

  eliminarIdVacante(){
    this.idVacante = null;
    sessionStorage.removeItem("vacante");
  }

  obtenerIdVacante(){
    
    this.idVacante = sessionStorage.getItem("vacante");
  }
  

}