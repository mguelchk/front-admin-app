import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postulacion } from '../../models/postulacion.model';

@Injectable()
export class PostulacionService {

  constructor(
    public http: HttpClient
  ) { }

  crearPostulacion(postulacion: Postulacion) {
    let url = URL_SERVICIOS + '/api/postulaciones';
    return this.http.post<any>(url, postulacion);
  }

  obtenerPostulacion(condiciones: string) {
    let url = URL_SERVICIOS + '/api/postulaciones?condiciones=' + condiciones;
    return this.http.get<any>(url);
  }

}