import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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