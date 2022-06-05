import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TmdbImagePipe } from '../../../services/tmdb-image.pipe';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  providers: [TmdbImagePipe],
})
export class CoverComponent implements OnInit {
  @Input() item: any;
  @Input() showDetails = true;
  @Output() openDetails = new EventEmitter();
  @Output() openPremium = new EventEmitter();

  constructor(
    private sanitizer: DomSanitizer,
    private tmdbImagePipe: TmdbImagePipe
  ) {}

  get bgImg() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `url('${this.tmdbImagePipe.transform(
        this.item?.backdrop_path || this.item?.poster_path,
        'w780'
      )}')`
    );
  }

  ngOnInit() {}
}
