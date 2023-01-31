import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ordersModel } from '../models/ordersModel';
import { productoModel } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  apiURI: string = "http://localhost:8000/api"

  constructor(
    private http: HttpClient
  ) { }

  create(order: ordersModel) {
    return this.http.post<ordersModel>(`${this.apiURI}/orders`, order);
  }

  getOrder(){
    return this.http.get<ordersModel>(`${this.apiURI}/orders`)
  }
  

}
