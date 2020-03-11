import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  expectedAnswer: string[] = [];

  @Input()
  nextStepUrl: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  try_answer(answer: string): void {
    answer = answer.toLowerCase();
    if (this.expectedAnswer.indexOf(answer) >= 0) {
      console.log('answer is correct,  redirecting to ' + this.nextStepUrl);
      this.router.navigateByUrl(this.nextStepUrl)
    } else {
      console.log('answer is incorrect')
    }
    console.log(answer)
  }

}
