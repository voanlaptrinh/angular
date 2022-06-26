import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  keyword = "";
  Subjects: Array<any> = [];

  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/subjects")
    .subscribe(data => {
      this.Subjects = data;
    })
    
    // this.getStudent();
    // this.getSubject();
  }
 


}
