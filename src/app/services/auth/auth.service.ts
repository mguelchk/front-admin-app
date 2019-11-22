import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../../models/menu.model';

@Injectable()
export class AuthService {

  usuario: Usuario;
  token: string;
  menus: Menu[] = [];

  constructor(
    public http: HttpClient
  ) { }

  public get usuarioSesion(): Usuario {
    if (this.usuario != null) {
      return this.usuario;
    } else if (this.usuario == null && sessionStorage.getItem('usuario') != null) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this.usuario;
    }
    return new Usuario(null, null, null, null, null);
  }

  public get tokenSesion(): string {
    if (this.token != null) {
      return this.token;
    } else if (this.token == null && sessionStorage.getItem('token') != null) {
      this.token = sessionStorage.getItem('token');
      return this.token;
    }
    return null;
  }

  login(usuario: Usuario, recordar: boolean = false) {

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.usuario);
    params.set('password', usuario.password);
    console.log(params.toString());

    let url = URL_SERVICIOS + '/oauth/token';

    return this.http.post<any>(url, params.toString(), { headers: httpHeaders });

  }

  guardarUsuario(accessToken: string): void {
    this.guardarToken(accessToken);
    let payload = this.obtenerDatosToken(accessToken);
    this.usuario = payload.usuario;
    if (this.usuario.roles != null) {
      this.menus = payload.usuario.roles[0].menus;
    }
    sessionStorage.setItem('usuario', JSON.stringify(payload.usuario));
  }

  guardarToken(accessToken: string): void {
    this.token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.token = null;
    this.usuario = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }
}