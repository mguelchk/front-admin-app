import { Area } from './area.model';
import { Cliente } from './cliente.model';
import { Estado } from './estado.model';

export class Vacante {

    public idVacante: number;
    public nombre: string;
    public sueldo: string;
    public descripcionBreve: string;
    public area: Area;
    public estado: Estado;
    public cliente: Cliente;
    public descripcion: string;
    public requisitos: string;
    public numVacante: number;
    public FechaContratacion: Date;
    public experiencia: string;
    public nivelEstudios: string;
    public disponibilidadViajar: boolean;
    public idioma: string;
    public rangoEdad: string;
    public tipoLicencia: string;
    public discapacidad: string;
    public vacantePostulada : boolean;

    constructor(


    ) { }

}


