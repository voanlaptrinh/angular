import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { QuestionService } from 'src/app/service/question.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  constructor(private router: ActivatedRoute,
    private questionService: QuestionService,
    private userService: UserService,
    private authService: AuthServiceService,
    private router1: Router
    ) { }
  user_select_answers: Array<any> = [];
  id: string = "";
  lstQuestions: Array<any> = [];
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['idmonhoc'];
      
      this.getQuestions();
    })
  }

  getQuestions(){
    this.questionService.list(this.id)
    .subscribe(data => {
      let randomArr = this.getDistinctNumberArr(10, data.length);
      this.lstQuestions = randomArr.map((ind) => data[ind]);
    })
  }

  private getDistinctNumberArr(amount = 10, max = 80){
    let arr: Array<number> = [];
    while(arr.length < amount){
      const rand = Math.floor(Math.random() * max);
      if(!arr.includes(rand)){
        arr.push(rand);
      }
    }
    return arr;
  }

  selectAnswer(qId:number, aId: number){
    let indx = -1;
    this.user_select_answers.forEach((el, index)=>{
      if(el.qId == qId){
        indx = index;
        return;
      }
    });
    if(indx == -1){
      this.user_select_answers.push({
        qId, aId
      });
    }else{
      this.user_select_answers[indx].aId = aId;
    }
  }

    submitExcercise(){
    let correctAns = 0;
    this.user_select_answers.forEach((el) => {
      let q = this.lstQuestions.find(item => item.Id == el.qId);
      if(q.AnswerId == el.aId){
        correctAns++;
      }
    })
    const score = (correctAns*10/this.lstQuestions.length).toFixed(2);
    let user = this.authService.loggedInUser.value;
    // user.marks
    let indx = -1;
    user.marks.forEach((m:any, i: number) => {
      if(m.subject == this.id){
        indx = i;
        return;
      }
    })
    if(indx == -1){
      user.marks.push({
        subject: this.id,
        score: Number(score)
      });
    }else{
      user.marks[indx].score = score;
    }
    this.userService.update(user)
      .subscribe(u => {
        console.log(u);
        
      })  
      console.log(this.id);
      
     this.router1.navigate(['/Diem/'+ this.id])
  }


}
