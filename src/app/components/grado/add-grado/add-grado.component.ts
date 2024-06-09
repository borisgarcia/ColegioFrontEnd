import { Component } from '@angular/core';
import { Grado } from '../../../models/grado.model';
import { GradoService } from '../../../services/grado.service';
import { Profesor } from '../../../models/profesor.model';
import { generateGUID } from '../../../utils';

@Component({
  selector: 'app-add-grado',
  templateUrl: './add-grado.component.html',
  styleUrl: './add-grado.component.css'
})
export class AddGradoComponent {
  grado: Grado = new Grado('','','','');
  submitted = false;
  profesores?: Profesor[];

  constructor(private gradoService: GradoService) { }

  ngOnInit(): void {
    this.retrieveProfesores();
  }

  saveGrado(): void {
    const data = {
      id: generateGUID(),
      nombre: this.grado.nombre,
      profesorId: this.grado.profesorId
    };

    this.gradoService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newGrado(): void {
    this.submitted = false;
    this.grado = new Grado('','','','');;
  }

  retrieveProfesores(): void {
    this.gradoService.getAllProfesores()
      .subscribe({
        next: (data) => {
          this.profesores = data;
        },
        error: (e) => console.error(e)
      });
  }
}
