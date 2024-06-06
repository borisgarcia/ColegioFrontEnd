import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './components/alumno/alumnos-list/alumnos-list.component';
import { AlumnoDetailsComponent } from './components/alumno/alumno-details/alumno-details.component';
import { AddAlumnoComponent } from './components/alumno/add-alumno/add-alumno.component';
import { ProfesorListComponent } from './components/profesor/profesor-list/profesor-list.component';
import { ProfesorDetailsComponent } from './components/profesor/profesor-details/profesor-details.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosListComponent },
  { path: 'alumnos/:id', component: AlumnoDetailsComponent },
  { path: 'add/alumno', component: AddAlumnoComponent },
  { path: 'profesores', component: ProfesorListComponent },
  { path: 'profesor/:id', component: ProfesorDetailsComponent },
  { path: 'add/profesor', component: AddProfesorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
