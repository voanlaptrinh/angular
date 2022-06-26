import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Users: Array<any>=[];
  FormUsers: any ={
    id: "",
    name: "",
    email: "",
    googleId: "",
    avatar: "",
  }
  constructor(private http: HttpClient) { }
  Subjects: Array<any> = [];
  ngOnInit(): void {
    
    this.http.get<any>("http://localhost:3000/users")
        .subscribe(data => {
          this.Subjects = data;
        })
  }
  submitdForm() {
    const newUsers = { ...this.FormUsers };
    if (newUsers.id == "") {
      this.http.post<any>("http://localhost:3000/users", newUsers)
        .subscribe(datad => {
          this.Subjects.push(datad);
        })
      alert('Thêm Mới thành công!');
    } else {
      this.http.put<any>(`http://localhost:3000/users/${newUsers.id}`, newUsers)
        .subscribe(data => {
          let index = -1;
          this.Subjects.forEach((item, i) => {
            if (item.id = newUsers.id) {
              index = i;
            }
          })
          this.Subjects[index] = data;
        });
      alert('Sửa thành công môn học!');
      location.reload();
    }




    this.FormUsers = {
      id: "",
    name: "",
    email: "",
    googleId: "",
    avatar: "",
    };
  }
  updated(item: any) {
    this.FormUsers = {...item};
   

  }
  removes(Subject: any) {
    this.http.delete<any>(`http://localhost:3000/users/${Subject.id}`)
    .subscribe(data =>{
      this.Subjects = this.Subjects.filter(item => item.id != Subject.id);
    })
  }

}
