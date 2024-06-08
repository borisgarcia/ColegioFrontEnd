export class Grado {
    constructor(id: string, nombre: string, profesorId: string, profesor: string) {
        this.id = id;
        this.nombre = nombre;
        this.profesorId = profesorId;
        this.profesor = profesor;
    }
    
    id: any;
    nombre: string;
    profesorId: string;
    profesor: string;
}
