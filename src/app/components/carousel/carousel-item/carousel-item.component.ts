import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CarouselItemInterface } from '../../../interfaces/carousel-item.interface';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('300ms', style({opacity: 0})),
      ]),
    ]),
  ],
})

export class CarouselItemComponent implements OnInit {

  @Input() cards: CarouselItemInterface[] = [];
  @Input() currentCard: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  goToCardLink(object: CarouselItemInterface): void {
    window.open(object.link);
  }
}
