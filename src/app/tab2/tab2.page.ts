import { Component } from '@angular/core';
import { SearchbarCustomEvent } from '@ionic/angular';
import { SearchStore } from './search.store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [SearchStore],
})
export class Tab2Page {
  constructor(public searchStore: SearchStore) {}

  search({ detail: { value } }: SearchbarCustomEvent) {
    this.searchStore.search(value);
  }
}
