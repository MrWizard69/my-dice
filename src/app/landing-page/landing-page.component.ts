import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  page = 'Landing';

  resultText = 'Ask a question and get an answer.';
  buttonText = 'Roll The Dice';
  resetTest = false;

  ngOnInit() {

  }

  rollDice() {

    const rollOne = Math.floor(Math.random() * 6) + 1;
    const rollTwo = Math.floor(Math.random() * 6) + 1;
    const rollThree = Math.floor(Math.random() * 6) + 1;

    let resultOne: boolean;
    let resultTwo: boolean;
    let resultThree: boolean;

    let resultCount = 0;

    console.log(rollOne + ' ' + rollTwo + ' ' + rollThree);

    if (rollOne >= 3) {

      resultOne = true;
      resultCount ++;
    } else {

      resultOne = false;
    }
    if (rollTwo >= 3) {

      resultTwo = true;
      resultCount++;
    } else {

      resultTwo = false;
    }
    if (rollThree >= 3) {

      resultThree = true;
      resultCount++;
    } else {

      resultThree = false;
    }

    if (resultCount === 3) {

      this.resultText = 'There is no question, it is very likely. No worries. Go forward with confidence.';
    } else if (resultCount === 2) {

      this.resultText = 'It is very likely. A sound decision. There are some surprises left in store.';
    } else if (resultCount === 1) {

      this.resultText = 'It does not look good. I would think twice before doing anything.';
    } else if (resultCount === 0) {

      this.resultText = 'There is no chance. Rethink the question and try again.';
    }

    if (this.resetTest == false) {

      this.resetTest = true;
      this.buttonText = 'New Question';
    } else if (this.resetTest == true) {

      this.resetTest = false;
      this.buttonText = 'Roll The Dice';
      this.resultText = 'Ask a question and get an answer.';
    }

  }

}
