import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

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
        'Authorization': 'Basic ' + btoa(email+':'+password),
        'Access-Control-Allow-Headers':'*'
      })
    };
      return this.httpClient.get('http://192.168.169.112:8000/beebook/default/login', this.options);
  }
}
