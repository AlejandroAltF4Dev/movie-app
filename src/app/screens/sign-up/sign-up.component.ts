import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  modal: IonModal;
  constructor() {}

  ngOnInit() {}
  async dismiss() {
    await this.modal.dismiss();
  }
}
