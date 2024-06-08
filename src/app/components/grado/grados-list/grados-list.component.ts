import { Component, OnInit } from '@angular/core';
import { Grado } from '../../../models/grado.model';
import { GradoService } from '../../../services/grado.service';

@Component({
  selector: 'app-grado-list',
  templateUrl: './grados-list.component.html',
  styleUrls: ['./grados-list.component.css']
})
export class GradosListComponent implements OnInit {

  grados?: Grado[];
  currentGrado: Grado = new Grado('','','','');
  currentIndex = -1;
  title = '';

  constructor(private gradoService: GradoService) { }

  ngOnInit(): void {
    this.retrieveGrados();
  }

  retrieveGrados(): void {
    this.gradoService.getAll()
      .subscribe({
        next: (data) => {
          this.grados = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveGrados();
    this.currentGrado = new Grado('','','','');
    this.currentIndex = -1;
  }

  setActiveGrado(grado: Grado, index: number): void {
    this.currentGrado = grado;
    this.currentIndex = index;
  }
}
