import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumPageRoutingModule } from './premium-routing.module';

import { PremiumPage } from './premium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PremiumPage],
})
export class PremiumPageModule {}
