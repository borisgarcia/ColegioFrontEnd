import { Component } from '@angular/core';
import { Matricula } from '../../../models/matricula.model';
import { Profesor } from '../../../models/profesor.model';
import { Alumno } from '../../../models/alumno.model';
import { MatriculaService } from '../../../services/matricula.service';
import { Grado } from '../../../models/grado.model';
import { generateGUID } from '../../../utils';

@Component({
  selector: 'app-add-matricula',
  templateUrl: './add-matricula.component.html',
  styleUrl: './add-matricula.component.css'
})
export class AddMatriculaComponent {
  matricula: Matricula = new Matricula('','','','','','');
  submitted = false;
  grados?: Grado[];
  alumnos?: Alumno[];

  constructor(private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.retrieveGrados();
    this.retrieveAlumnos();
  }

  saveMatricula(): void {
    const data = {
      id: generateGUID(),
      alumnoId: this.matricula.alumnoId,
      gradoId: this.matricula.gradoId,
      seccion: this.matricula.seccion,
      alumno: '',
      grado: ''
    };

    this.matriculaService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newMatricula(): void {
    this.submitted = false;
    this.matricula = new Matricula('','','','','','');;
  }

  retrieveGrados(): void {
    this.matriculaService.getAllGrados()
      .subscribe({
        next: (data) => {
          this.grados = data;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveAlumnos(): void {
    this.matriculaService.getAllAlumnos()
      .subscribe({
        next: (data) => {
          this.alumnos = data;
        },
        error: (e) => console.error(e)
      });
  }  
}
