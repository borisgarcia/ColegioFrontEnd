import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../services/profesor.service';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {

  profesores?: Profesor[];
  currentProfesor: Profesor = {
    id: '',
    nombre: '',
    apellidos: '',
    genero: 0
  };
  currentIndex = -1;
  title = '';

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.retrieveProfesores();
  }

  retrieveProfesores(): void {
    this.profesorService.getAll()
      .subscribe({
        next: (data) => {
          this.profesores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProfesores();
    this.currentProfesor = {
      id: '',
      nombre: '',
      apellidos: '',
      genero: 0    
    };
    this.currentIndex = -1;
  }

  setActiveProfesor(profesor: Profesor, index: number): void {
    this.currentProfesor = profesor;
    this.currentIndex = index;
  }
}
