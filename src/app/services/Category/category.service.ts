import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(){
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    return this.http.get<Category[]>(`${baseUrl}category/getCategories`);
  }

}
