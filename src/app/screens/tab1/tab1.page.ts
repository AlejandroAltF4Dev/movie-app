import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DetailsPage } from '../../shared/modals/details/details.page';
import { PremiumPage } from '../../shared/modals/premium/premium.page';
import { ITmdbMovie } from '../../shared/interfaces/itmdb-movie';
import { ITmdbTv } from '../../shared/interfaces/itmdb-tv';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  mainMovie: ITmdbMovie;
  trendingMovies$: Observable<ITmdbMovie[]>;
  trendingTv$: Observable<ITmdbTv[]>;

  constructor(
    private tmdbService: TmdbService,
    public modalController: ModalController,
    private ionRouterOutlet: IonRouterOutlet
  ) {}

  ngOnInit(): void {
    this.trendingMovies$ = this.tmdbService.trending('movie').pipe(
      map((movies: ITmdbMovie[]) => {
        this.mainMovie = movies.shift();
        return movies;
      })
    );
    this.trendingTv$ = this.tmdbService.trending('tv');
  }

  async openDetails(details: { type: 'movie' | 'tv'; id: string }) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: details,
      presentingElement: this.ionRouterOutlet.nativeEl,
      swipeToClose: true,
    });
    return await modal.present();
  }

  async openPremiumModal() {
    const modal = await this.modalController.create({
      component: PremiumPage,
      presentingElement: this.ionRouterOutlet.nativeEl,
      swipeToClose: true,
    });
    return await modal.present();
  }
}
