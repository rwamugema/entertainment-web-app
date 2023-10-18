import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create email and password fields', () => {
    const email = component.LoginForm.controls['email'];
    const password = component.LoginForm.controls['password'];
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('should require email and password values', () => {
    component.LoginForm.setValue({
      email: '',
      password: '',
    });
    expect(component.LoginForm.valid).toBeFalsy();
    expect(component.LoginForm.get('email')?.hasError('required')).toBeTruthy();
    expect(
      component.LoginForm.get('password')?.hasError('required'),
    ).toBeTruthy();
  });
  it('should locate to /posts when form is valid', () => {
    component.LoginForm.setValue({
      email: 'test@example.com',
      password: 'password',
    });
    expect(component.LoginForm.valid).toBeTruthy();
    spyOn(component, 'onSubmit');

    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
