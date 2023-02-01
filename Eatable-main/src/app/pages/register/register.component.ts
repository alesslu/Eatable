import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'src/app/models/userModel';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    // first_name: new FormControl(''),
    // last_name: new FormControl(''),
    // phone: new FormControl(''),
  });

  User: userModel = {
    _id: "",
    name: "",
    email: "",
    password: "",
    phone: 0,
    address: "",
  };

  constructor(
    private readonly fb: FormBuilder,
    private sessionsService: SessionsService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  register(): void {
    this.User = this.registerForm.getRawValue() as unknown as userModel
    // this.sessionsService.register(this.registerForm.getRawValue() as unknown as userModel)
    this.sessionsService.register(this.User)
    // localStorage.setItem("credenciales", JSON.stringify(credenciales))
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


}
