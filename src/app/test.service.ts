import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private _url: string = 'http://localhost:9000/api';
  constructor(private http: HttpClient) {}

  getStudent(dept): Observable<any> {
    // console.log('data1 is:', data1);
    return this.http.get<any>(
      `${this._url}/class/getAllStudentsOfDept/${dept}`
    );
  }

  deleteStudent(id): Observable<any> {
    // console.log('data1 is:', data1);
    return this.http.delete<any>(`${this._url}/student/${id}`);
  }

  getDataS(): Observable<any> {
    // console.log('data1 is:', data1);
    return this.http.get<any>(`${this._url}/student`);
  }

  getDataC(): Observable<any> {
    // console.log('data1 is:', data1);
    return this.http.get<any>(`${this._url}/class`);
  }

  getDataH(data): Observable<any> {
    // console.log('data1 is:', data1);
    return this.http.get<any>(`${this._url}/hod/${data}`);
  }

  setData(data1: any, data2: any): Observable<any> {
    console.log(data1, data2);
    return this.http.post<any>(`${this._url}/setData/${data2}`, data1);
  }
}
