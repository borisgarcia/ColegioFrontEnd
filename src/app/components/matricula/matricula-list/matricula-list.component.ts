import { Component } from '@angular/core';
import { Matricula } from '../../../models/matricula.model';
import { MatriculaService } from '../../../services/matricula.service';

@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrl: './matricula-list.component.css'
})
export class MatriculaListComponent {
  matriculas?: Matricula[];
  currentMatricula: Matricula = new Matricula('','','','','','');
  currentIndex = -1;
  title = '';

  constructor(private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.retrieveMatriculas();
  }

  retrieveMatriculas(): void {
    this.matriculaService.getAll()
      .subscribe({
        next: (data) => {
          this.matriculas = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveMatriculas();
    this.currentMatricula = new Matricula('','','','','','');
    this.currentIndex = -1;
  }

  setActiveMatricula(matricula: Matricula, index: number): void {
    this.currentMatricula = matricula;
    this.currentIndex = index;
  }
}
