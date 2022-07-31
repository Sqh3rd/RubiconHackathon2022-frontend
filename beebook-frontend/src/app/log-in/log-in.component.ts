import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
  }

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
    }
  }
}
