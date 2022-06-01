import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../screens/login/login.component';
import { SignUpComponent } from '../screens/sign-up/sign-up.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private modalController: ModalController) {}

  async openModal(modalName: string) {
    const modal = await this.modalController.create({
      component: modalName === 'login' ? LoginComponent : SignUpComponent,
    });
    return modal.present();
  }
}
