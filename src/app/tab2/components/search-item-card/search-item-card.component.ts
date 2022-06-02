import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../../../screens/details/details.page';
import { PeopleDetailsPage } from '../../../screens/people-details/people-details.page';

@Component({
  selector: 'app-search-item-card',
  templateUrl: './search-item-card.component.html',
  styleUrls: ['./search-item-card.component.scss'],
})
export class SearchItemCardComponent implements OnInit {
  @Input() item: any;
  @Output() details = new EventEmitter();
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  openDetails(item: any) {
    this.details.emit(item);

  }
}
