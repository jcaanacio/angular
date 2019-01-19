import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _auth:AuthService) { 
    this.username
    this.password
  }

  ngOnInit() {
  }

  login() {
      let userDetails =  {
        "username": this.username,
        "password": this.password
      }
      this._auth.loginUser(userDetails).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
