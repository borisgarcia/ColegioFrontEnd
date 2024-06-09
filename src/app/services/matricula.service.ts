import { Injectable } from '@angular/core';
import { Matricula } from '../models/matricula.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno.model';
import { Grado } from '../models/grado.model';

const baseUrl = 'https://localhost:7263/api/alumnogrado';
const alumnoBaseUrl = 'https://localhost:7263/api/alumnos';
const gradoBaseUrl = 'https://localhost:7263/api/grado';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${baseUrl}/get-all-alumnoGrados`);
  }

  getById(id: any): Observable<Matricula> {
    return this.http.get<Matricula>(`${baseUrl}/get-alumnoGrado/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-alumnoGrado`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-alumnoGrado/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-alumnoGrado/${id}`);
  }

  getAllAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${alumnoBaseUrl}/get-all-alumnos`);
  }

  getAllGrados(): Observable<Grado[]> {
    return this.http.get<Grado[]>(`${gradoBaseUrl}/get-all-grados`);
  }
}
