import { Genero } from "./genero.enum";

export class Profesor {
    constructor(id: string, nombre: string, apellido: string, nombreCompleto: string, genero: Genero, grados: string[]) {
        this.id = id,
        this.nombre = nombre,
        this.apellidos = apellido,
        this.nombreCompleto = nombreCompleto,
        this.genero = genero,
        this.grados = grados
    }
    
    id: any;
    nombre: string;
    apellidos: string;
    nombreCompleto: string;
    genero: number;
    grados: string[];
}
