import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { pluck } from 'rxjs/operators';
import { ITmdbRespone } from '../shared/interfaces/itmdb-response';
import { ITmdbTv } from '../shared/interfaces/itmdb-tv';
import { ITmdbMovie } from '../shared/interfaces/itmdb-movie';
import { ITmdbPerson } from '../shared/interfaces/itmdb-person';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  endpoint = environment.tmdbUrl;
  defaultParams = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    api_key: environment.tmdbApiToken,
    language: 'en-US',
  };

  constructor(private http: HttpClient) {}

  trending(type: 'tv' | 'movie' | 'person') {
    return this.http
      .get<ITmdbRespone<ITmdbTv | ITmdbMovie | ITmdbPerson>>(
        `${this.endpoint}/trending/${type}/day`,
        {
          params: new HttpParams({
            fromObject: {
              ...this.defaultParams,
            },
          }),
        }
      )
      .pipe(pluck('results'));
  }

  details(type: 'tv' | 'movie' | 'person', id: any) {
    return this.http.get<ITmdbTv | ITmdbMovie | ITmdbPerson>(
      `${this.endpoint}/${type}/${id}`,
      {
        params: new HttpParams({
          fromObject: {
            ...this.defaultParams,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            append_to_response: 'videos,credits,images',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            include_image_language: 'es,en,null',
          },
        }),
      }
    );
  }

  search(query: string) {
    return this.http.get<ITmdbRespone<ITmdbTv | ITmdbMovie | ITmdbPerson>>(
      `${this.endpoint}/search/multi`,
      {
        params: new HttpParams({
          fromObject: {
            ...this.defaultParams,
            query,
          },
        }),
      }
    );
  }
}
