import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openDetails(item: any) {
    const componentProps = {
      type: item.media_type,
      [item.media_type === 'person' ? 'personId' : 'id']: item.id,
    };
    const modal = await this.modalController.create({
      component: item.media_type === 'person' ? PeopleDetailsPage : DetailsPage,
      componentProps,
    });
    return modal.present();
  }
}
