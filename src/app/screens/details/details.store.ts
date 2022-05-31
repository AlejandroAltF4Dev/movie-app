import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb.service';
import { EMPTY, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface DetailsState {
  details: any;
}

@Injectable()
export class DetailsStore extends ComponentStore<DetailsState> {
  readonly details$ = this.select((state) => state.details);
  readonly title$ = this.details$.pipe(
    filter((details) => !!details),
    map((details) => details.title || details.name)
  );

  readonly setDetails = this.updater((state, details: any) => ({
    details,
  }));

  readonly getDetails = this.effect(
    (params$: Observable<{ type: string; id: string }>) =>
      params$.pipe(
        switchMap(({ id, type }) =>
          this.tmdbService.details(type, id).pipe(
            tapResponse(
              (details) => this.setDetails(details),
              (error: HttpErrorResponse) => console.log(error)
            ),
            catchError(() => EMPTY)
          )
        )
      )
  );

  constructor(private tmdbService: TmdbService) {
    super({
      details: null,
    });
  }
}
