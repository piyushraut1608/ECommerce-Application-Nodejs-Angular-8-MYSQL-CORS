import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetail } from 'src/app/models/order-detail';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  CreatePaypalTransacton(orderDetail: OrderDetail){
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/api/'
    return this.http.post<any>(`${baseUrl}order/submitOrder`, orderDetail);
  }

}
