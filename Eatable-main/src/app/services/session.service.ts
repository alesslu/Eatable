import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { userModel } from 'src/app//models/userModel';

interface User {
  email: string;
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUri: string = "http://localhost:8000/api";

  user?: User | null;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    this.http.post(`${this.apiUri}/login`, { email, password })
      .subscribe((data: any) => {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          this.router.navigate(["/principal/home"]);
        }
      });
    }
  
    logOut(): void {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
    }
  
    isLogged(): boolean {
      if (sessionStorage.getItem("token")) {
        return true;
      } else {
        return false;
      }
    }
  
    register(user: userModel): void {
      this.http.post<userModel>(`${this.apiUri}/users`, user).subscribe(
        (data: any) => {
          alert("Registro correcto");
          localStorage.setItem("credenciales", JSON.stringify(user))
          this.router.navigate(["/login"]);
  
          // if (data.token) {
          //   alert("Registro correcto");
          //   sessionStorage.setItem("token", data.token);
          //   this.router.navigate(["/login"]);
          // }
        },
        (err) => {
          alert("Usuario existente");
        }
      );
    }
  
    getProfile() {
      return this.http.get(`${this.apiUri}/profile`);
    }
  
  }
  