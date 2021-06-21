import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingRegion } from 'src/app/models/shipping-region';
import { Observable } from 'rxjs';

//This is from backend (nodejs port 8080)
const baseUrl = 'http://localhost:8080/api/'
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  constructor(private http: HttpClient) { }

  getShippingRegions(): Observable<ShippingRegion[]>{
    return this.http.get<ShippingRegion[]>(`${baseUrl}shipping/getShippingRegions`);
  }

}
