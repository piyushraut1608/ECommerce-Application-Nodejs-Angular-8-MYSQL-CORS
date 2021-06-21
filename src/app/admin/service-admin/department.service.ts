import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Those http are from department.js and department.controller.js that use postman for department at backend
//All accesses for department is from department.js and department.controller.js
//Please check there if you need to know how those data come from.
export class DepartmentService {

  constructor(private http: HttpClient) { }

  //Get all data from database service
  getAll() {
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/department'
    return this.http.get(baseUrl);
  }

  //create
  create(data) {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.post(baseUrl, data);
  }

  //Get exactly one item (data) for edit and delete using http with id
  //delete or edit will not work if you have not provide http with id
  //for example of edit: http://localhost:4200/department/edit-department/1
  //because that "this.getDepartmentID(this.route.snapshot.paramMap.get('department_id'));" in department-table.component.ts will look for http with id like example of edit-department/1
  get_Id(department_id) {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.get(`${baseUrl}/${department_id}`);
  }

  //edit
  edit(department_id, data) {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.put(`${baseUrl}/${department_id}`, data);
  }

  //delete exactly item (data) by id
  delete(department_id) {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.delete(`${baseUrl}/${department_id}`);
  }


  //delete all items from list
  deleteAll() {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.delete(baseUrl);
  }

  //get exactly item by id
  findByID(id) {
    const baseUrl = 'http://localhost:8080/department'
    return this.http.get(`${baseUrl}?id=${id}`);
  }

}
