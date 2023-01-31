<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../models/userModel';
import { SessionsService } from './sessions.service';
=======
import { Injectable } from '@angular/core';

>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
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
=======
  constructor() { }
}

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(
//     private http: HttpClient,
//     private authService: AuthService
//     ) {}

//   getUserData(): Observable<[]> {
//     let user = this.authService.getCurrentUser()
//     return this.http.get<[]>(`http://localhost:8000/api/profile${user._id})}`);
//   }
// }
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
