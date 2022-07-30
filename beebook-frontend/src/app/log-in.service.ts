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
        'Authorization': 'Basic ' + btoa(email+':'+password),
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
      })
    };
      return this.httpClient.get('http://localhost:8000/beebook/default/login', this.options).subscribe(data => console.log(data));
  }
}
