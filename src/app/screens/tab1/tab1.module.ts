import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { TmdbImagePipe } from '../../services/tmdb-image.pipe';
import { CoverComponent } from '../../shared/components/cover/cover.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    Tab1PageRoutingModule,
  ],
  exports: [CoverComponent, TmdbImagePipe],
  declarations: [Tab1Page, TmdbImagePipe, CoverComponent, CarouselComponent],
})
export class Tab1PageModule {}
