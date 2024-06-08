import { Component, Input, OnInit } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../../../models/alumno.model';
import { Genero } from '../../../models/genero.enum';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})
export class AlumnoDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentAlumno: Alumno = new Alumno('', '', '', '', new Date(), 0, []);
  message = '';

  constructor(
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAlumno(this.route.snapshot.params["id"]);
    }
  }

  getAlumno(id: string): void {
    this.alumnoService.getById(id)
      .subscribe({
        next: (data) => {
          this.currentAlumno = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateAlumno(): void {
    this.message = '';
    console.log(this.currentAlumno);
    this.alumnoService.update(this.currentAlumno?.id, this.currentAlumno)
      .subscribe({
        next: (res) => { },
        error: (e) => console.error(e)
      });
  }

  deleteAlumno(): void {
    this.alumnoService.delete(this.currentAlumno?.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/alumnos']);
        },
        error: (e) => console.error(e)
      });
  }

  getEnumName(id: number): string {
    return Genero[id];
  }

}