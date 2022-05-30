import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeopleDetailsPageRoutingModule } from './people-details-routing.module';

import { PeopleDetailsPage } from './people-details.page';
import { Tab1PageModule } from '../../tab1/tab1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleDetailsPageRoutingModule,
    Tab1PageModule,
  ],
  declarations: [PeopleDetailsPage],
})
export class PeopleDetailsPageModule {}
