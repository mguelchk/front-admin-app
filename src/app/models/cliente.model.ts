import { Estado } from './estado.model';

export class Cliente {

     public idArea: number;
     public nombre: string;
     public descripcion: string;
     public estado: Estado;
     public direccion: string;


     constructor(
          idArea: number,
          nombre: string,
          descripcion: string,
          estado: Estado,
          direccion: string

     ) {
          this.idArea = idArea;
          this.nombre = nombre;
          this.descripcion = descripcion;
          this.estado = estado;
          this.direccion = direccion;
     }

}


