import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vacante } from '../../models/vacante.model';

@Injectable()
export class VacanteService {

  constructor(
    public http: HttpClient
  ) { }

  obtenerVacantes(vacante: Vacante) {
    let url = URL_SERVICIOS + '/api/vacantes';
    return this.http.post<any>(url, vacante);
  }

}