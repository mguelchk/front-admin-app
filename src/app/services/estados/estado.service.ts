import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EstadoService {

  constructor(
    public http: HttpClient
  ) { }

  obtenerEstados(){
    let url = URL_SERVICIOS + '/api/estados';
    return this.http.get<any>( url );
  }
  
}