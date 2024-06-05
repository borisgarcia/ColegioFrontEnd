import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';

const baseUrl = 'https://localhost:7263/api/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${baseUrl}/get-all-alumnos`);
  }

  getById(id: any): Observable<Alumno> {
    return this.http.get<Alumno>(`${baseUrl}/get-alumno/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-alumno`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-alumno/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-alumno/${id}`);
  }
}
