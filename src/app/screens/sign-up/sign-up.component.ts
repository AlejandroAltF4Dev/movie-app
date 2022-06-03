import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  modal: IonModal;
  signupForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]],
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

  signup() {
    if (this.signupForm.invalid) {
      return;
    }
    // Signup
  }
}
