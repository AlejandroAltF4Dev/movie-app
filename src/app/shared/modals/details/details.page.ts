import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TmdbService } from '../../../services/tmdb.service';
import { IonModal, ModalController } from '@ionic/angular';
import { PhotoViewerComponent } from '../../components/photo-viewer/photo-viewer/photo-viewer.component';
import { TmdbImagePipe } from '../../../services/tmdb-image.pipe';
import { PeopleDetailsPage } from '../people-details/people-details.page';
import { PremiumPage } from '../premium/premium.page';
import { DetailsStore } from '../../store/details.store';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  providers: [TmdbImagePipe, DetailsStore],
})
export class DetailsPage implements OnInit {
  @Input() id: string;
  @Input() type: 'tv' | 'movie' | 'person';
  modal: IonModal;

  constructor(
    private route: ActivatedRoute,
    public detailsStore: DetailsStore,
    private tmdbService: TmdbService,
    private modalController: ModalController,
    private tmdbImagePipe: TmdbImagePipe
  ) {}

  ngOnInit() {
    this.detailsStore.getDetails({ type: this.type, id: this.id });
  }

  async dismiss() {
    await this.modal.dismiss();
  }

  async openImage(posters: any[], index: number) {
    const modal = await this.modalController.create({
      component: PhotoViewerComponent,
      presentingElement: this.modal.presentingElement,
      swipeToClose: true,
      componentProps: {
        data: {
          posters: posters.map((poster, i) => ({
            title: i + 1,
            url: this.tmdbImagePipe.transform(poster.file_path),
          })),
          index,
        },
      },
    });
    return modal.present();
  }

  async openPersonDetails(cast: any) {
    const modal = await this.modalController.create({
      component: PeopleDetailsPage,
      presentingElement: this.modal.presentingElement,
      swipeToClose: true,
      componentProps: {
        personId: cast.id,
      },
    });
    return modal.present();
  }

  async openPremiumModal() {
    const modal = await this.modalController.create({
      component: PremiumPage,
      presentingElement: this.modal.presentingElement,
      swipeToClose: true,
    });
    return modal.present();
  }
}
