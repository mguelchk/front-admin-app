import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AreaService {

  constructor(
    public http: HttpClient
  ) { }

  obtenerAreasPorNombre(nombreArea : String){
    let url = URL_SERVICIOS + '/api/areas/'+nombreArea;
    return this.http.get<any>( url );
  }
  
}