import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor.model';

const baseUrl = 'https://localhost:7263/api/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${baseUrl}/get-all-profesores`);
  }

  getById(id: any): Observable<Profesor> {
    return this.http.get<Profesor>(`${baseUrl}/get-profesor/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add-profesor`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-profesor/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete-profesor/${id}`);
  }
}
