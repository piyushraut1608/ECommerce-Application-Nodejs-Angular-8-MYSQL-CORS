import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  AddNewCustomer(customer: Customer): Observable<boolean> {
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    return this.http.post<boolean>(`${baseUrl}customer/addNewCustomer`, customer);
  }

  Login(username: string, password: string): Observable<Customer>{
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    return this.http.post<Customer>(`${baseUrl}customer/authenticateLogin`, {Username: username, Password: password});
  }

  Logout(){
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    let result = this.http.get(`${baseUrl}customer/logout`);
    return result;
  }

}
