import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-quiz',
  templateUrl: './admin-quiz.component.html',
  styleUrls: ['./admin-quiz.component.css']
})
export class AdminQuizComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient) { }
  quiz: Array<any> =[];

  id: string = "";
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['id'];
      this.http.get<any>(`http://localhost:3000/${this.id}`)
      .subscribe(data=>{
        this.quiz = data;
      })
    })
  }


}
