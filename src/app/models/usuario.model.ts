import { Rol } from './rol.model';
export class Usuario {
    public idUsuario?: number;
    constructor(
        public nombre?: string,
        public usuario?: string,
        public password?: string,
        public email?: string,
        public roles?: Rol[],
        public nombreUsuario?: string,
        public telefono?: string,
        public recover?: boolean

    ) { }

}


