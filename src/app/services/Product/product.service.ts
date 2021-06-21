import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Paging } from 'src/app/models/paging';
import { ProductPaginData } from 'src/app/models/product-pagin-data';

//This is from backend (nodejs port 8080)
const baseUrl = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  
  constructor(private http: HttpClient) { }

  geProductByDepartmentId(paging: Paging): Observable<Product[]>{
    return this.http.post<Product[]>(`${baseUrl}department/getDepartments`, paging);
  }

  getProductList(paging: Paging): Observable<ProductPaginData> {
    return this.http.post<ProductPaginData>(`${baseUrl}product/getFilteredProducts`, { paging: paging });
  }

  getProductDetailsById(productId: number):Observable<Product> {
    return this.http.get<Product>(`${baseUrl}product/getProductDetails?productId=${productId}`);
  }

}
