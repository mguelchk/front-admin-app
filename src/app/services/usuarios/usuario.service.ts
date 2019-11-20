import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../../models/menu.model';

@Injectable()
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) { }

  crearUsuario(usuario : Usuario ){
    let url = URL_SERVICIOS + '/api/usuario';
    return this.http.post<any>( url, usuario );
  }
  
}