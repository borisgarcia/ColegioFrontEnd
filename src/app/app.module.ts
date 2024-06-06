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

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AlumnoDetailsComponent,
    AlumnosListComponent,
    AddProfesorComponent,
    ProfesorDetailsComponent,
    ProfesorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
