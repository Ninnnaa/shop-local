import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserInterface } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {

  cards: UserInterface[] = [];
  searchText= '';

  constructor(
    private readonly authServiceService : AuthServiceService,
  ) { }

  ngOnInit(): void {
    this.authServiceService.getUsers().subscribe( user => {
      user.shift()
      user.shift()
      this.cards = user
    });
  }

}
