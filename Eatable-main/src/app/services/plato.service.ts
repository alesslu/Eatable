import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../models/plato.model';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Plato[]> {
    return this.http.get<Plato[]>('http://localhost:8000/api/products');
  }

  getDishById(id: string){
    return this.http.get<Plato>(`http://localhost:8000/api/products/${id}`)
  }


}
