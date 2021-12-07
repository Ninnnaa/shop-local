import { Component, OnInit } from '@angular/core';
import { CarouselItemInterface } from '../../interfaces/carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  currentCard = 0;
  time: any;
  cards: CarouselItemInterface[] =  [
    {
      title: 'Un nou iarmatoc la Chisinau',
      description: 'Un iarmaroc de toamnă pentru comercializarea fructelor si legumelor sezoniere',
      link: '/events',
      image: 'assets/images/autumn-event-fruit.png',
    },
    {
      title: 'Iarmarocul de Iarna a inceput',
      description: 'Un iarmaroc de iar pentru comercializarea decoratiunilor de iarna unice',
      link: '/events',
      image: 'assets/images/event-winter.png',
    },
    {
      title: 'Un nou producator de bejuterii sa alaturat',
      description: 'Accesorii handmade și bijuterii create manual. Livrare  in toata Moldova',
      link: '/events',
      image: 'assets/images/user.png',
    }
]

  ngOnInit(): void {
    this.autoSlideCarrousel();
  }

  resetTimer(): void {
    clearTimeout(this.time);
    this.time = setTimeout(() => this.autoSlideCarrousel(), 3000);
  }

  moveToPreviousSlide(): void {
    this.resetTimer();
    const previous = this.currentCard - 1;
    this.currentCard = previous < 0 ? this.cards.length - 1 : previous;
  }

  moveToNextSlide(): void {
    this.resetTimer();
    const next = this.currentCard + 1;
    this.currentCard = next === this.cards.length ? 0 : next;
  }

  autoSlideCarrousel(): void {
      this.moveToNextSlide();
  }
}
