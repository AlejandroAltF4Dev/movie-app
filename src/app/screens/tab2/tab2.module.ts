import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PhotoViewerModule } from '../../shared/components/photo-viewer/photo-viewer.module';
import { SearchItemCardComponent } from './components/search-item-card/search-item-card.component';
import { Tab1PageModule } from '../tab1/tab1.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    PhotoViewerModule,
    Tab1PageModule,
  ],
  declarations: [Tab2Page, SearchItemCardComponent],
})
export class Tab2PageModule {}
