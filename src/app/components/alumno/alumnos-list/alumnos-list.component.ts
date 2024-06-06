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
  currentAlumno: Alumno = {
    id: '',
    nombre: '',
    apellidos: '',
    genero: 0,
    fechaNacimiento: undefined
  };
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
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAlumnos();
    this.currentAlumno = {
      id: '',
      nombre: '',
      apellidos: '',
      genero: 0,
      fechaNacimiento: undefined
    };
    this.currentIndex = -1;
  }

  setActiveAlumno(alumno: Alumno, index: number): void {
    this.currentAlumno = alumno;
    this.currentIndex = index;
  }
}
