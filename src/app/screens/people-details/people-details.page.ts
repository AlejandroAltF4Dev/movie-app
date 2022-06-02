import {Component, Input, OnInit} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {IonModal, ModalController} from '@ionic/angular';
import {PhotoViewerComponent} from '../../photo-viewer/photo-viewer/photo-viewer.component';
import {TmdbImagePipe} from '../../services/tmdb-image.pipe';
import {DetailsPage} from '../details/details.page';
import {DetailsStore} from '../store/details.store';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
  providers: [TmdbImagePipe, DetailsStore],
})
export class PeopleDetailsPage implements OnInit {
  @Input() personId: any;
  modal: IonModal;

  constructor(
    private tmdbService: TmdbService,
    private modalController: ModalController,
    public detailsStore: DetailsStore,
    private tmdbImagePipe: TmdbImagePipe
  ) {
  }

  ngOnInit() {
    this.detailsStore.getDetails({type: 'person', id: this.personId});
  }

  async dismiss() {
    await this.modal.dismiss();
  }

  async openImage(posters: any[], index: number) {
    const modal = await this.modalController.create({
      component: PhotoViewerComponent,
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

  async openDetails(details: { type: 'movie' | 'tv'; id: string }) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: details,
      presentingElement: this.modal.presentingElement,
      swipeToClose: true
    });
    return await modal.present();
  }
}
