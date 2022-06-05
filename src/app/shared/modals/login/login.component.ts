import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  modal: IonModal;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  passwordInputType = 'password';
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  async dismiss() {
    await this.modal.dismiss();
  }

  togglePasswordInputType() {
    this.passwordInputType =
      this.passwordInputType === 'password' ? 'text' : 'password';
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    // Login
  }
}
