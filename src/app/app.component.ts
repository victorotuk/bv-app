import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  heading = 'Introducing BetValley';
  heading_2 = 'The #1 online gaming betting platform.';
  description = 'bet on and play your favorite video games.';
  appStoreImg = "https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png";
  playStoreImg = "https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png";

}
