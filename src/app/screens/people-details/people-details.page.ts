import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Observable } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';
import { IonModal, ModalController } from '@ionic/angular';
import { PhotoViewerComponent } from '../../photo-viewer/photo-viewer/photo-viewer.component';
import { TmdbImagePipe } from '../../services/tmdb-image.pipe';
import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
  providers: [TmdbImagePipe],
})
export class PeopleDetailsPage implements OnInit {
  @Input() personId: any;
  details$: Observable<any>;
  name$: Observable<any>;
  modal: IonModal;
  opened = false;
  constructor(
    private tmdbService: TmdbService,
    private modalController: ModalController,
    private tmdbImagePipe: TmdbImagePipe
  ) {}

  ngOnInit() {
    this.details$ = this.tmdbService
      .details('person', this.personId)
      .pipe(shareReplay(1));
    this.name$ = this.details$.pipe(map((item) => item.title || item.name));
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
      /*  presentingElement: this.ionRouterOutlet.nativeEl,
        swipeToClose: true*/
    });
    return await modal.present();
  }
}
