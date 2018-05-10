import { UserService } from './services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  trainer = {
    name: 'Link'
  };
  foes = [
    {
      Ndex: 25,
      name: 'Anubis',
      type: 'Egyptian',
      image_url: 'https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/thumb/e/e8/OoT_Anubis_Model.png/96px-OoT_Anubis_Model.png'
    },
    {
      Ndex: 10,
      name: 'Blue Bubble',
      type: 'Undead',
      image_url: 'https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/thumb/8/8d/Bluebubble.png/183px-Bluebubble.png'
    },
    {
      name: 'Deku Scrub',
      type: 'Plant',
      image_url: 'https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/thumb/c/c8/Madscrub2.png/240px-Madscrub2.png'
    },
    {
      Ndex: 94,
       name: 'Gerudo Guard',
      type: 'Ghost',
      image_url: 'https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/thumb/2/25/GerudoGuardOoT3D.png/180px-GerudoGuardOoT3D.png'
    },
    {
      Ndex: 143,
      name: 'Armos',
      type: 'Stone',
      image_url: 'https://d1u5p3l4wpay3k.cloudfront.net/zelda_gamepedia_en/thumb/2/26/OoT_Armos_Model.png/162px-OoT_Armos_Model.png'
    }
  ];

  constructor(private userService: UserService) {
    this.title = `Link's War Chest!`;
  }
  onClick() {
    console.log(this.trainer.name);
  }
  everySecond() { console.log('gotta catch em all'); }
}
