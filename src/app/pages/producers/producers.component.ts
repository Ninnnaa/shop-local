import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserInterface } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

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
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.authServiceService.getUsers().subscribe( user => {
      user.shift()
      user.shift()
      this.cards = user
    });
  }

  getUser(id:number) {
    this.router.navigateByUrl(`/producer/${id}`);
  }
}
