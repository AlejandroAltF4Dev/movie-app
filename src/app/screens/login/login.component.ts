import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  modal: IonModal;
  constructor() {}

  ngOnInit() {}
  async dismiss() {
    await this.modal.dismiss();
  }
}
