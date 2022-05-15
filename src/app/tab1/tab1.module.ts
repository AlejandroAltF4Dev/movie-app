import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {TmdbImagePipe} from '../services/tmdb-image.pipe';
import {CoverComponent} from './components/cover/cover.component';
import {CarouselComponent} from './components/carousel/carousel.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  exports: [
    CoverComponent
  ],
  declarations: [Tab1Page, TmdbImagePipe, CoverComponent, CarouselComponent]
})
export class Tab1PageModule {
}
