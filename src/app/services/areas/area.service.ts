import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Area } from '../../models/area.model';

@Injectable()
export class AreaService {

  constructor(
    public http: HttpClient
  ) { }

  obtenerAreasPorNombre(nombreArea : String){
    let url = URL_SERVICIOS + '/api/areas/'+nombreArea;
    return this.http.get<any>( url );
  }

  obtenerAreas(){
    let url = URL_SERVICIOS + '/api/areas-todos';
    return this.http.get<any>( url );
  }

  obtenerAreaPorId(idArea : number){
    let url = URL_SERVICIOS + '/api/areas/'+idArea;
    return this.http.get<any>( url );
  }

  crearActualizarAreas(area : Area){
    let url = URL_SERVICIOS + '/api/areas';
    return this.http.post<any>( url, area);
  }

  eliminarAreas(idArea : number){
    let url = URL_SERVICIOS + '/api/areas/'+idArea;
    return this.http.delete<any>( url);
  }
  
}