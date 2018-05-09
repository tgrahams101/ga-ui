import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  proclamation: string;
  username: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUserName();
    this.proclamation = `Behold, it's ${this.username}'s Master Sword`;
  }

}
