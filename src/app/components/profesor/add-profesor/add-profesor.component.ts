import { Component } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../services/profesor.service';
import { generateGUID } from '../../../utils';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrl: './add-profesor.component.css'
})
export class AddProfesorComponent {
  profesor: Profesor = new Profesor('','','','',0,[]);
  submitted = false;

  constructor(private profesorService: ProfesorService) { }

  saveProfesor(): void {
    const data = {
      id: generateGUID(),
      nombre: this.profesor.nombre,
      apellidos: this.profesor.apellidos,
      genero: Number(this.profesor.genero),
    };

    this.profesorService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProfesor(): void {
    this.submitted = false;
    this.profesor = new Profesor('','','','',0,[]);
  }
}
