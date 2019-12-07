import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ModalAreaService {

  public tipo: string;
  public id: string;

  public oculto: string = 'oculto';
  public notificacion = new EventEmitter<any>();

  constructor(
  ) { }
  
  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal() {
    this.oculto = '';
  }
}