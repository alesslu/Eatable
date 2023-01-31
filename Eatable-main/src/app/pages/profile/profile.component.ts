import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
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

}
