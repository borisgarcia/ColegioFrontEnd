import { Genero } from './genero.enum'

export class Alumno {
    constructor(id: string, nombre: string, apellido: string, nombreCompleto: string, fechaNacimiento: Date, genero: Genero, grados: string[]) {
        this.id = id,
        this.nombre = nombre,
        this.apellidos = apellido,
        this.nombreCompleto = nombreCompleto,
        this.fechaNacimiento = fechaNacimiento,
        this.genero = genero,
        this.grados = grados
    }
    
    id: string;
    nombre: string;
    apellidos: string;
    nombreCompleto: string;
    fechaNacimiento: Date;
    genero: Genero;
    grados: string[];
}