import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LogInService {
  user_name: string = '';
  is_logged_in: boolean = false;
  options = {};

  constructor(private httpClient: HttpClient) { }

  login (email:string, password:string) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + email + ':' + password,
        'Access-Control-Allow-Origin':'*'
      })
    };
      return this.httpClient.get('http://localhost:8000/beebook/default/login', this.options).subscribe(data => console.log(data), error => console.log(error));
  }
}
