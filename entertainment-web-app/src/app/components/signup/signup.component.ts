import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  SignupForm: FormGroup = this.createSignupForm();
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}
  createSignupForm() {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.SignupForm.valid) {
      const signup = [];
      signup.push(this.SignupForm.value);
      localStorage.setItem('signup', JSON.stringify(signup));
      this.router.navigate(['/']);
    }
  }
}
