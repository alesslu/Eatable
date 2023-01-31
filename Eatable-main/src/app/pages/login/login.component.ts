<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionsService } from 'src/app/services/sessions.service';
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';


>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

<<<<<<< HEAD
  loginForm = new FormGroup({
    email: new FormControl('testinoliz@mail.com'),
=======
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('test10@mail.com'),
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
    password: new FormControl('123456'),
  });

  constructor(
    private readonly fb: FormBuilder,
<<<<<<< HEAD
    private sessionsService: SessionsService,
    ) { }
=======
    private sessionsService: SessionService,
    private router: Router) { }
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.sessionsService.login(email!, password!);
<<<<<<< HEAD
=======

>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    })
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
