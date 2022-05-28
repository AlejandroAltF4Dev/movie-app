import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../services/tmdb.service';
import {delay, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {DetailsPage} from "../screens/details/details.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  categories$;
  trendingMovies$;
  mainMovie: any;
  trendingTv$: Observable<any>;

  constructor(
    private tmdbService: TmdbService,
    public modalController: ModalController,
    private ionRouterOutlet: IonRouterOutlet
  ) {
  }

  ngOnInit(): void {
    this.categories$ = this.tmdbService.movieCategories();
    this.trendingMovies$ = this.tmdbService.trending('movie').pipe(
      /*
            delay(3000),
      */
      map((movies: any) => {
        this.mainMovie = movies.shift();
        return movies;
      })
    );
    this.trendingTv$ = this.tmdbService.trending('tv').pipe(
      /*
            delay(3000)
      */
    );
  }


  async openDetails(details: { type: 'movie' | 'tv', id: string }) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: details,
     /*  presentingElement: this.ionRouterOutlet.nativeEl,
       swipeToClose: true*/
    });
    return await modal.present();

  }
}
