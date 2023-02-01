import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../models/userModel';
import { SessionsService } from './sessions.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUri: string = "http://localhost:8000/api";


  constructor(
    private http: HttpClient,
  ) { }

  getProfile(iduser: string) {
    return this.http.get<userModel>(`${this.apiUri}/profile/${iduser}`);
  }

  updateProfile(iduser: string, user: userModel) {
    return this.http.put(`${this.apiUri}/profile/${iduser}`, user);
  }

}