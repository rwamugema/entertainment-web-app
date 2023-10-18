import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginFormState {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForm: FormGroup = this.createLoginForm();
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}
  createLoginForm() {
    return this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9_%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.LoginForm.valid) {
      const signupUser = localStorage.getItem('signup');
      const signedUpUsers: LoginFormState[] = signupUser
        ? JSON.parse(signupUser)
        : [];
      const enteredEmail = this.LoginForm.get('email')?.value;
      const enteredPassword = this.LoginForm.get('password')?.value;

      const matchingUser = signedUpUsers.find((user) => {
        return user.email === enteredEmail && user.password === enteredPassword;
      });
      if (matchingUser) {
        localStorage.setItem('login', JSON.stringify(matchingUser));
        this.router.navigate(['/posts']);
      }
    }
  }
}
