import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage implements OnInit {
  items = [
    { icon: 'tv', text: 'Streaming in high quality' },
    { icon: 'alert-circle', text: 'Ad-free viewing experience' },
    { icon: 'download', text: 'Download to watch later' },
    { icon: 'logo-closed-captioning', text: 'Text of different languages' },
    { icon: 'phone-portrait', text: 'Stream on multiple devices' },
    { icon: 'volume-high', text: 'With the best audio quality' },
  ];
  form: FormGroup = this.fb.group({
    type: 'monthly',
  });
  modal: IonModal;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  async dismiss() {
    await this.modal.dismiss();
  }
}
