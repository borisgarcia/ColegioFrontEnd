import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './components/alumno/add-alumno/add-alumno.component';
import { AlumnoDetailsComponent } from './components/alumno/alumno-details/alumno-details.component';
import { AlumnosListComponent } from './components/alumno/alumnos-list/alumnos-list.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { ProfesorDetailsComponent } from './components/profesor/profesor-details/profesor-details.component';
import { ProfesorListComponent } from './components/profesor/profesor-list/profesor-list.component';
import { AddGradoComponent } from './components/grado/add-grado/add-grado.component';
import { GradoDetailsComponent } from './components/grado/grado-details/grado-details.component';
import { GradosListComponent } from './components/grado/grados-list/grados-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AlumnoDetailsComponent,
    AlumnosListComponent,
    AddProfesorComponent,
    ProfesorDetailsComponent,
    ProfesorListComponent,
    AddGradoComponent,
    GradoDetailsComponent,
    GradosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
