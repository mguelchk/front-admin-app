import { Rol } from './rol.model';
export class Usuario {

    constructor(
        public nombre: string,
        public usuario: string,
        public password: string,
        public email: string,
        public roles: Rol[],
        public nombreUsuario?: string,

    ) { }

}


