import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) { }

  GetData():Observable<any>{
    return this.http.get('https://devitjobs.us/api/jobsLight')
  }
}
