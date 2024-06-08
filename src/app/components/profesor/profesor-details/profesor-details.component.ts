import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from '../../../services/profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from '../../../models/profesor.model';
import { Genero } from '../../../models/genero.enum';

@Component({
  selector: 'app-profesor-details',
  templateUrl: './profesor-details.component.html',
  styleUrls: ['./profesor-details.component.css']
})
export class ProfesorDetailsComponent implements OnInit {
  Genero = Genero;
  @Input() viewMode = false;
  @Input() currentProfesor: Profesor= new Profesor('','','','',0,[]);

  message = '';

  constructor(
    private profesorService: ProfesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProfesor(this.route.snapshot.params["id"]);
    }
  }

  getProfesor(id: string): void {
    this.profesorService.getById(id)
      .subscribe({
        next: (data) => {
          this.currentProfesor = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateProfesor(): void {
    this.message = '';
    console.log(this.currentProfesor);
    this.profesorService.update(this.currentProfesor?.id, this.currentProfesor)
      .subscribe({
        next: (res) => {
        },
        error: (e) => console.error(e)
      });
  }

  deleteProfesor(): void {
    this.profesorService.delete(this.currentProfesor?.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/profesors']);
        },
        error: (e) => console.error(e)
      });
  }

  getEnumName(id: number): string {
    return Genero[id];
  }
}