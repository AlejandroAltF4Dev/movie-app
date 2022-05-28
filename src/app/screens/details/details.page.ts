import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TmdbService} from '../../services/tmdb.service';
import {delay, map, switchMap} from 'rxjs/operators';
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  title$: Observable<any>;
  details$: Observable<any>;
  modal: IonModal;
  @Input() id: string;
  @Input() type: string;
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {
  }

  ngOnInit() {
    this.details$ = this.tmdbService.details(this.type, this.id);
    this.title$ = this.details$.pipe(map(item => item.title || item.name));
  }

  async dismiss() {
    await this.modal.dismiss();
  }
}
