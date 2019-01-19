import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _domain ="http://demo5321387.mockable.io/"
  private _loginUrl = this._domain + "authenticate"

  constructor(private http: HttpClient) { }

  loginUser(user){
    console.log(this._loginUrl);
    return this.http.post(this._loginUrl,user);
  }
}
