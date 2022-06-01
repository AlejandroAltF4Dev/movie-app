import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { TmdbService } from '../services/tmdb.service';
import { EMPTY, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SearchState {
  query: string;
  results: any[];
}
@Injectable()
export class SearchStore extends ComponentStore<SearchState> {
  results$ = this.select((state) => state.results);
  readonly search = this.effect((query$: Observable<string>) =>
    query$.pipe(
      filter((query) => !!query),
      switchMap((query) =>
        this.tmdbService.search(query).pipe(
          tapResponse(
            (response) => this.patchState({ results: response.results }),
            (error: HttpErrorResponse) => console.log(error)
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private tmdbService: TmdbService) {
    super({
      query: '',
      results: null,
    });
  }
}
