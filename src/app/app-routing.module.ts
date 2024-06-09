import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './components/alumno/alumnos-list/alumnos-list.component';
import { AlumnoDetailsComponent } from './components/alumno/alumno-details/alumno-details.component';
import { AddAlumnoComponent } from './components/alumno/add-alumno/add-alumno.component';
import { ProfesorListComponent } from './components/profesor/profesor-list/profesor-list.component';
import { ProfesorDetailsComponent } from './components/profesor/profesor-details/profesor-details.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { GradosListComponent } from './components/grado/grados-list/grados-list.component';
import { GradoDetailsComponent } from './components/grado/grado-details/grado-details.component';
import { AddGradoComponent } from './components/grado/add-grado/add-grado.component';
import { AddMatriculaComponent } from './components/matricula/add-matricula/add-matricula.component';
import { MatriculaDetailsComponent } from './components/matricula/matricula-details/matricula-details.component';
import { MatriculaListComponent } from './components/matricula/matricula-list/matricula-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosListComponent },
  { path: 'alumnos/:id', component: AlumnoDetailsComponent },
  { path: 'add/alumno', component: AddAlumnoComponent },
  { path: 'profesores', component: ProfesorListComponent },
  { path: 'profesor/:id', component: ProfesorDetailsComponent },
  { path: 'add/profesor', component: AddProfesorComponent },
  { path: 'grados', component: GradosListComponent },
  { path: 'grado/:id', component: GradoDetailsComponent },
  { path: 'add/grado', component: AddGradoComponent },
  { path: 'matriculas', component: MatriculaListComponent },
  { path: 'add/matricula', component: AddMatriculaComponent },
  { path: 'matricula/:id', component: MatriculaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
