import { Component } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent {

  alumno: Alumno = new Alumno('','','', '',new Date(), 0, []);
  submitted = false;
  
  constructor(private alumnoService: AlumnoService) { }

  saveAlumno(): void {
    const data = {
      id: this.generateGUID(),
      nombre: this.alumno?.nombre,
      apellidos: this.alumno?.apellidos,
      genero: Number(this.alumno?.genero),
      fechaNacimiento: this.alumno?.fechaNacimiento,
    };

    this.alumnoService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAlumno(): void {
    this.submitted = false;
    this.alumno = new Alumno('','','', '',new Date(), 0, []);
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}