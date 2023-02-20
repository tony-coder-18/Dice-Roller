import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dice-roller';

  dicesBaseUrl = "../assets/";

  dice1: string = this.dicesBaseUrl + "dice1.png";
  dice2: string = this.dicesBaseUrl + "dice1.png";

  randomDice(): void {
    let random1: number = Math.floor(Math.random() * 6);
    while (random1 === 0) {
      random1 = Math.floor(Math.random() * 6);
    }

    let random2: number = Math.floor(Math.random() * 6);
    while (random2 === 0) {
      random2 = Math.floor(Math.random() * 6);
    }

    this.dice1 = `${this.dicesBaseUrl}dice${random1}.png`;
    this.dice2 = `${this.dicesBaseUrl}dice${random2}.png`;

    console.log(this.dice1, this.dice2);
  }
}
