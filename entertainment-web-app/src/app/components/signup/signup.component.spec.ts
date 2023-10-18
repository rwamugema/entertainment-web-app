import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page with email,password and confirmPassword', () => {
    expect(component.SignupForm.controls['email']).toBeTruthy();
    expect(component.SignupForm.controls['password']).toBeTruthy();
    expect(component.SignupForm.controls['confirmPassword']).toBeTruthy();
  });

  it('should require email, password and confirmPassword', () => {
    component.SignupForm.setValue({
      email: '',
      password: '',
      confirmPassword: '',
    });

    expect(component.SignupForm.invalid).toBeTruthy();
    expect(
      component.SignupForm.controls['email'].hasError('required'),
    ).toBeTruthy();
    expect(
      component.SignupForm.controls['password'].hasError('required'),
    ).toBeTruthy();
    expect(
      component.SignupForm.controls['confirmPassword'].hasError('required'),
    ).toBeTruthy();
  });

  it('should submit form when inputs are true', () => {
    component.SignupForm.setValue({
      email: 'test@example.com',
      password: '123456',
      confirmPassword: '123456',
    });

    expect(component.SignupForm.valid).toBeTruthy();

    spyOn(component, 'onSubmit');
    component.onSubmit();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
