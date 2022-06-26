import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiemService {

  constructor(private http: HttpClient) { }
  getDiem(subject: string):Observable<any>{
    return this.http.get<any>(`${environment.user_api}`);
  }
}
