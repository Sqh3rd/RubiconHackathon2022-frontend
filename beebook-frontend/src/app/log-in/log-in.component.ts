import { Component } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: LogInService) {
  }

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
          .subscribe(res => console.log(res));
    }
  }
}
