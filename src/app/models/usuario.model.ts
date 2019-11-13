
export class Usuario {

    constructor(
        public nombre: string,
        public usuario: string,
        public password: string,
        public email:string,
        public roles?: any[],
        public menus?: any[],

    ) { }

}


