import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(data) {
    console.log(data)
    return this.http.post('http://localhost:3000/login', data);
  }
}
