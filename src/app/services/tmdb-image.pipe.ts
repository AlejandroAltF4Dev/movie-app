import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tmdbImage'
})
export class TmdbImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const size = args[0] || 'original';
    return `https://image.tmdb.org/t/p/${size}/${value}`;
  }

}
