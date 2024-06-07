import { Component, Input, OnInit } from '@angular/core';
import { GradoService } from '../../../services/grado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grado } from '../../../models/grado.model';

@Component({
  selector: 'app-grado-details',
  templateUrl: './grado-details.component.html',
  styleUrls: ['./grado-details.component.css']
})
export class GradoDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentGrado: Grado = {
    id: '',
    nombre: '',
    profesor: '',
    profesorId: ''
  };

  message = '';

  constructor(
    private gradoService: GradoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getGrado(this.route.snapshot.params["id"]);
    }
  }

  getGrado(id: string): void {
    this.gradoService.getById(id)
      .subscribe({
        next: (data) => {
          this.currentGrado = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateGrado(): void {
    this.message = '';
    console.log(this.currentGrado);
    this.gradoService.update(this.currentGrado?.id, this.currentGrado)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  deleteGrado(): void {
    this.gradoService.delete(this.currentGrado?.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/grados']);
        },
        error: (e) => console.error(e)
      });
  }
}