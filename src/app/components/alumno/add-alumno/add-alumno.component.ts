import { Component } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';
import { generateGUID } from '../../../utils';

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
      id: generateGUID(),
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
}