import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogin = false;

  roleAs: string;

  user_name: string;


  constructor(private httpclient:HttpClient, private router:Router) { }

  login(email: string, password: string) {
    // Back End Call einfügen
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json;charset=iso-8859-1",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Basic " + btoa(email + ':' + password),
      })
    };
    this.httpclient.get('beebook/default/login', options).subscribe((data: any) => this.user_name = data['username']);
    if (this.user_name){
      this.isLogin = true;
      this.roleAs = "test"; // == Rolle die im Back end gespeichert ist
      localStorage.setItem('STATE', 'true');
      localStorage.setItem('ROLE', this.roleAs);
    }
    this.router.navigate(["../home"]);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    if (this.user_name)
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getUserName(){
    return this.user_name;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE') || "";
    return this.roleAs;
  }

}