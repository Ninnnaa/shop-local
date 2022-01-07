import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import { UserInterface } from '../../../interfaces/auth.interface';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {
  userId: number = 0;
  userData: UserInterface = {} as UserInterface;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: AuthServiceService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  ngOnInit(): void {
    this.authService.getUser(this.userId).subscribe( user => {
      this.userData = user;
    })
  }
}
