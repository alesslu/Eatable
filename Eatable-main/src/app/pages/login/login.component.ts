import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('testinoliz@mail.com'),
    password: new FormControl('123456'),
  });

  constructor(
    private readonly fb: FormBuilder,
    private sessionsService: SessionsService,
    ) { }

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
