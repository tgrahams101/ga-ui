import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hylian-shield',
  templateUrl: './hylian-shield.component.html',
  styleUrls: ['./hylian-shield.component.css']
})
export class HylianShieldComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  proclamation: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.proclamation = `Hey bruh, scope out my Hylian shield!`;
  }

}
