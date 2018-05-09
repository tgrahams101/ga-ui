import { UserService } from './services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private userService: UserService){
    this.title = `Link's War Chest!`;
  }
}
