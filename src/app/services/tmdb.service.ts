import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  endpoint = environment.tmdbUrl;
  defaultParams = {
    api_key: environment.tmdbApiToken,
    language: 'en-US',
  };

  constructor(private http: HttpClient) {}

  movieCategories() {
    return this.http
      .get(`${this.endpoint}/genre/movie/list`, {
        params: new HttpParams({
          fromObject: {
            ...this.defaultParams,
          },
        }),
      })
      .pipe(pluck('genres'));
  }

  trending(type = '') {
    return this.http
      .get(`${this.endpoint}/trending/${type}/day`, {
        params: new HttpParams({
          fromObject: {
            ...this.defaultParams,
          },
        }),
      })
      .pipe(pluck('results'));
  }

  details(type: any, id: any) {
    return this.http.get(`${this.endpoint}/${type}/${id}`, {
      params: new HttpParams({
        fromObject: {
          ...this.defaultParams,
          append_to_response: 'videos,credits,images',
          include_image_language: 'es,en,null',
        },
      }),
    });
  }
}
