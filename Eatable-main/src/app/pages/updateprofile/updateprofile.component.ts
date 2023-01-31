import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iduser = localStorage.getItem('iduser');
    this.userService.getProfile(this.iduser!).subscribe((res: any) => {
      this.profile = res;
    });
  }

  updateUser(){
    this.userService.updateProfile(this.profile._id, this.profile).subscribe((res: any) => {
      alert('profile updated!')
    });
    this.router.navigate(['/principal/profile']);
  }

}
