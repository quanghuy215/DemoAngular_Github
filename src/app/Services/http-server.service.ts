import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USER = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization : 'my-auth-token'
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public postComments(payLoad: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    console.log('post comments : url = ', url);
    console.log('post comments : payLoad = ', payLoad);
    return this.httpClient.post<any>(url, payLoad, this.httpOptions);
  }
  public getRandomUsers(users: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVER_RANDOM_USER}` + users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
