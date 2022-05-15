import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TmdbService} from '../../services/tmdb.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {
  }

  ngOnInit() {
    this.details$ = this.route.paramMap.pipe(
      switchMap(params => {
        const type = params.get('type');
        const id = params.get('id');
        return this.tmdbService.details(type, id);
      }));
  }

}
