import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {
  Code: String = "";
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  Diem: Array<any> = [];
 

  ngOnInit(): void {
  this.router.params.subscribe(datas=>{
    this.Code=datas['id']
  })
   this.http.get<any>("http://localhost:3000/users")
    .subscribe(data => {
      this.Diem = data;
      console.log(this.Diem);
    })
    
  }
}
