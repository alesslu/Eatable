import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8000/api/orders';
  
  get() {
    return this.http.get(this.url);
  }
  post(data: any) {
    return this.http.post(this.url, data);
  }
}
