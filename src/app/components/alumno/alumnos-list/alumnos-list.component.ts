import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  alumnos?: Alumno[];
  currentAlumno: Alumno = new Alumno('','','', '',new Date(), 0, []);
  currentIndex = -1;
  title = '';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.retrieveAlumnos();
  }

  retrieveAlumnos(): void {
    this.alumnoService.getAll()
      .subscribe({
        next: (data) => {
          this.alumnos = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAlumnos();
    this.currentAlumno = new Alumno('','','', '',new Date(), 0, []);
    this.currentIndex = -1;
  }

  setActiveAlumno(alumno: Alumno, index: number): void {
    this.currentAlumno = alumno;
    this.currentIndex = index;
  }
}
