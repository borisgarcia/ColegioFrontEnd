export class Matricula {
    constructor(id: string, gradoId: string, alumnoId: string, seccion: string, grado: string, alumno: string){
        this.id = id;
        this.gradoId = gradoId;
        this.alumnoId = alumnoId;
        this.seccion = seccion;
        this.grado = grado;
        this.alumno = alumno;
    }

    id: string;
    gradoId: string;
    alumnoId: string;
    seccion: string;
    grado: string;
    alumno: string;
}
