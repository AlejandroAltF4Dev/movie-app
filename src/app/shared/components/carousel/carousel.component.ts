import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items$: Observable<any>;
  @Input() sectionTitle: string;
  @Output() openDetails = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
