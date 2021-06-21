import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  //Get all data
  getDepartments(): Observable<Department[]> {
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    return this.http.get<Department[]>(`${baseUrl}department/getDepartments`);
  }
}
 