import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grado } from '../models/grado.model';
import { Profesor } from '../models/profesor.model';

const baseUrl = 'https://localhost:7263/api/grado';
const profesorBaseUrl = 'https://localhost:7263/api/profesor';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grado[]> {
    return this.http.get<Grado[]>(`${baseUrl}/get-all-grados`);
  }

  getById(id: any): Observable<Grado> {
    return this.http.get<Grado>(`${baseUrl}/get-grado/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-grado`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-grado/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-grado/${id}`);
  }

  getAllProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${profesorBaseUrl}/get-all-profesores`);
  }
}
