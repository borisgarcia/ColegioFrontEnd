import { Component, Input } from '@angular/core';
import { Matricula } from '../../../models/matricula.model';
import { MatriculaService } from '../../../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grado } from '../../../models/grado.model';
import { Alumno } from '../../../models/alumno.model';

@Component({
  selector: 'app-matricula-details',
  templateUrl: './matricula-details.component.html',
  styleUrl: './matricula-details.component.css'
})
export class MatriculaDetailsComponent {
  @Input() viewMode = false;
  @Input() currentMatricula: Matricula = new Matricula('','','','','','');
  message = '';
  grados?: Grado[];
  alumnos?: Alumno[];
  
  constructor(
    private gradoService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.retrieveAlumnos();
      this.retrieveGrados();
      this.getMatricula(this.route.snapshot.params["id"]);
    }
  }

  getMatricula(id: string): void {
    this.gradoService.getById(id)
      .subscribe({
        next: (data) => {
          this.currentMatricula = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateMatricula(): void {
    this.message = '';
    console.log(this.currentMatricula);
    this.gradoService.update(this.currentMatricula?.id, this.currentMatricula)
      .subscribe({
        next: (res) => {
        },
        error: (e) => console.error(e)
      });
  }

  retrieveAlumnos(): void {
    this.gradoService.getAllAlumnos()
      .subscribe({
        next: (data) => {
          this.alumnos = data;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveGrados(): void {
    this.gradoService.getAllGrados()
      .subscribe({
        next: (data) => {
          this.grados = data;
        },
        error: (e) => console.error(e)
      });
  }

  deleteMatricula(): void {
    this.gradoService.delete(this.currentMatricula?.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/grados']);
        },
        error: (e) => console.error(e)
      });
  }
}
