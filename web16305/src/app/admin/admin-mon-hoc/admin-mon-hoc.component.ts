import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-mon-hoc',
  templateUrl: './admin-mon-hoc.component.html',
  styleUrls: ['./admin-mon-hoc.component.scss']
})
export class AdminMonHocComponent implements OnInit {


  Subjects: Array<any> = [];
  formSubjects: any = {
    id: "",
    Code: "",
    Name: "",
    Logo: "",

  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(" http://localhost:3000/subjects")
      .subscribe(data => {
        this.Subjects = data;
      })
  }
  submitdForm() {
    const newSubject = { ...this.formSubjects };
    if (newSubject.id == "") {
      this.http.post<any>("http://localhost:3000/subjects", newSubject)
        .subscribe(datad => {
          this.Subjects.push(datad);
        })
      alert('Thêm Mới thành công!');
    } else {
      this.http.put<any>(` http://localhost:3000/subjects/${newSubject.id}`, newSubject)
        .subscribe(data => {
          let index = -1;
          this.Subjects.forEach((item, i) => {
            if (item.id = newSubject.id) {
              index = i;
            }
          })
          this.Subjects[index] = data;
        });
      alert('Sửa thành công môn học!');
      location.reload();
    }



    this.formSubjects = {
      id: "",
      Code: "",
      Name: "",
      Logo: "",
    };
  }

  updated(item: any) {
    this.formSubjects = {...item};
   

  }

  removes(Subject: any) {
    this.http.delete<any>(`http://localhost:3000/subjects/${Subject.id}`)
      .subscribe(data => {
        this.Subjects = this.Subjects.filter(item => item.id != Subject.id);

      })
    alert('Bạn đã xóa')

  }

}
