import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productoModel } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUri: string = "http://localhost:8000/api";

  constructor(
    private http: HttpClient
  ) { }

  // getProducts(): Observable<productoModel[]> {
  //   // getProdcuts(): Observable<productoModel[]> {
  //   return this.http.get<productoModel[]>(`${this.apiUri}/products`);
  // }

  getProducts() {
    return this.http.get<productoModel[]>(`${this.apiUri}/products`)
  }

  getProductById(id: string){
    return this.http.get<productoModel>(`${this.apiUri}/products/${id}`)
  }

}
