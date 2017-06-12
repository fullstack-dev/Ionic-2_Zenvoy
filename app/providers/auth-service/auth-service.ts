import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage, LocalStorage } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  local: Storage = new Storage(LocalStorage);
  data: any;
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  error: string;
  //apiUrl: string = 'http://local.zenvoy.net:8888/api';
  apiUrl: string = 'http://dev.zenvoy.net/api';
  isLoggedIn: boolean;

  constructor(private http: Http) {
    this.data = null;
    this.isLoggedIn = false;
  }

  check() {
    return this.local.get('user');
  }

  login(user: User) {
    let headers = new Headers();
    var loginUrl = `${this.apiUrl}/v2/auth/login`;
    //console.log("loginURL="+loginUrl);
    headers.append("Content-Type", "application/json");
    
    return new Promise((resolve,reject) => {
      this.http
        .post(loginUrl, user, { headers: this.contentHeader } )
        .subscribe(data => {
          //console.log("data="+data);
          if(data.json().success) {
            this.local.set('user', JSON.stringify(data.json().user));
            this.isLoggedIn = true;
            resolve(data);
          } else {
            var errors = data.json().errors;
            //console.log("error");
            reject(errors);

          }
        })

    });
  }

  logOut() {
    return new Promise(resolve => {
      this.local.remove('user');
      resolve();
    });
  }

  signUp(user: User) {
    let headers = new Headers();
    var signupUrl = `${this.apiUrl}/v2/onboarding/signup`;
    headers.append("Content-Type", "application/json");
    console.log(signupUrl);
    return new Promise((resolve,reject) => {
      this.http
        .post(signupUrl, user, { headers: this.contentHeader } )
        .subscribe(data => {
           console.log(data.json());
          if(data.json().success) {
            this.local.set('user', JSON.stringify(data.json().user));
            this.isLoggedIn = true;
            resolve(data);
          } else {
            var errors = data.json().errors;
            console.log(JSON.stringify(errors));
            reject(errors);
          }
        })

    });
  }

  resetPass(email: string) {
    let headers = new Headers();
    var forgotPassUrl = `${this.apiUrl}/v2/auth/password/reset`;
    console.log(forgotPassUrl);
    headers.append("Content-Type", "application/json");

    return new Promise((resolve,reject) => {
      this.http
        .post(forgotPassUrl, JSON.stringify({ email: email }), { headers: this.contentHeader } )
        .subscribe(data => {
          console.log(JSON.stringify(data.json().success));
          if(data.json().success) {
            resolve(data);
          } else {
            var errors = data.json().errors;
            reject(errors);
          }
        })
    });
  }
}

