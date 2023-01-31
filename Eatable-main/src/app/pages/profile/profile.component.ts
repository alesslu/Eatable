<<<<<<< HEAD
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/userModel';
import { SessionService } from 'src/app/services/session.service';
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
<<<<<<< HEAD
export class ProfileComponent {
  iduser: string | null = null;

  public profile: userModel = {
    _id: '',
    name: '',
    email: '',
    password: '',
    address: '',
    phone: 0,
  };

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.iduser = localStorage.getItem('iduser');
    this.userService.getProfile(this.iduser!).subscribe((res: any) => {
      this.profile = res;
    });
  }

  logOut() {
    localStorage.removeItem("iduser");
    sessionStorage.removeItem("token");
    this.router.navigate(['login']);
  }

  change() {
    this.router.navigate(['principal/profile/update']);
  }
=======
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31

export class ProfileComponent implements OnInit {
  hidden: boolean = false;

  public profile: userModel = {
    _id: '',
    name: '',
    email: '',
    password: '',
    address: '',
    phone: 0,
  };

  constructor(
    private router: Router,
    private SessionService: SessionService,
  ){}

  ngOnInit(): void {
    this.SessionService.getProfile().subscribe((res: any) => {
      this.profile = res;
    });
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }

  hide=()=>{
    if (this.hidden) {
      this.hidden = false
    } else {
      this.hidden= true
    }
  }
}
