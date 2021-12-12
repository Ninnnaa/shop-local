import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  event = {
      date: "20 decembrie",
      time: "11:00",
      addres: "Pata Marii Adunari Naționale",
      details: "Cumpără Bilete și vină împreună cu copilașii 20 decembrie 2021, ora 11:00 la cel mai mare iarmaroc al anului",
      list: "Home Made Candy, ChocoCap, Vego roseLile și mulți alții "
    }

}
