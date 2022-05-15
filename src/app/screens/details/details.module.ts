import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DetailsPageRoutingModule} from './details-routing.module';

import {DetailsPage} from './details.page';
import {Tab1PageModule} from '../../tab1/tab1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    Tab1PageModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {
}
