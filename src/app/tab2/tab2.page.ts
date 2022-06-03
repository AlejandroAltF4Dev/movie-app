import { Component } from '@angular/core';
import {
  IonRouterOutlet,
  ModalController,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { SearchStore } from './search.store';
import { PeopleDetailsPage } from '../screens/people-details/people-details.page';
import { DetailsPage } from '../screens/details/details.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [SearchStore],
})
export class Tab2Page {
  constructor(
    public searchStore: SearchStore,
    private ionRouterOutlet: IonRouterOutlet,
    public modalController: ModalController
  ) {}

  search({ detail: { value } }: SearchbarCustomEvent) {
    this.searchStore.search(value);
  }

  async openDetailsModal(item) {
    const componentProps = {
      type: item.media_type,
      [item.media_type === 'person' ? 'personId' : 'id']: item.id,
    };
    const modal = await this.modalController.create({
      component: item.media_type === 'person' ? PeopleDetailsPage : DetailsPage,
      presentingElement: this.ionRouterOutlet.nativeEl,
      swipeToClose: true,
      componentProps,
    });
    return modal.present();
  }
}
