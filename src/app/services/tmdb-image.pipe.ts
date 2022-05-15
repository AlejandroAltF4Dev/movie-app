import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tmdbImage'
})
export class TmdbImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `https://image.tmdb.org/t/p/original/${value}`;
  }

}
