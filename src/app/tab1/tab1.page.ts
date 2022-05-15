import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../services/tmdb.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categories$;
  trendingMovies$;
  mainMovie: any;
  trendingTv$: Observable<any>;

  constructor(
    private tmdbService: TmdbService
  ) {
  }

  ngOnInit(): void {
    this.categories$ = this.tmdbService.movieCategories();
    this.trendingMovies$ = this.tmdbService.trending('movie').pipe(
      map((movies: any) => {
        this.mainMovie = movies.shift();
        return movies;
      })
    );
    this.trendingTv$ = this.tmdbService.trending('tv');
  }

}
