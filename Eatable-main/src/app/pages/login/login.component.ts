import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('test10@mail.com'),
    password: new FormControl('123456'),
  });

  constructor(
    private readonly fb: FormBuilder,
    private sessionsService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.sessionsService.login(email!, password!);

  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    })
  }
}