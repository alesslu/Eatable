import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/userModel';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

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
