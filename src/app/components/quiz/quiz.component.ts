import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../service/quiz.service';
import { LargeCategory } from '../../enumeration/large-category';
import { Quiz } from '../../model/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  idx: number = 0;
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes(LargeCategory.COMPUTER).subscribe(res => {
      this.quizzes = res;
    });
  }

  prev() {
    if (this.idx > 0)
      this.idx--;
    else
      this.idx = this.quizzes.length - 1;
  }

  next(){
    if(this.idx == this.quizzes.length - 1)
      this.idx = 0;
    else
      this.idx++;
  }

}
