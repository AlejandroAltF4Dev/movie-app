import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { TmdbService } from '../../services/tmdb.service';
import { EMPTY, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface DetailsState {
  details: any;
  opened: boolean;
}

@Injectable()
export class DetailsStore extends ComponentStore<DetailsState> {
  readonly details$ = this.select((state) => state.details);
  readonly opened$ = this.select((state) => state.opened);
  readonly title$ = this.details$.pipe(
    filter((details) => !!details),
    map((details) => details.title || details.name)
  );

  readonly setDetails = this.updater((state, details: any) => ({
    ...state,
    details,
  }));

  readonly toggleOpened = this.updater((state, details: any) => ({
    ...state,
    opened: !state.opened,
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
      opened: false,
    });
  }
}
