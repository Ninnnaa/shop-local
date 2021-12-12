import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {

  cards = [
    {
      title: 'Home Made Candy'
    },
    {
      title: 'ChocoCap'
    },
    {
      title: 'roseLile'
    },
    {
      title: 'Vego'
    },
    {
      title: 'Home Made Vegan Sweets'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
