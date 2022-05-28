import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'youtubeUrl'
})
export class YoutubeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(key: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }

}
