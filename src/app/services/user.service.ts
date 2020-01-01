import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

import { endpoints } from './endpoints';
import { Storage } from '../common/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: Storage,
    private http: HttpClient) { }

  authURL = endpoints.BASEURL + endpoints.AUTH;

  logIn(userName: string, passwd: string) {
    const encodedUser = btoa(userName + ":" + passwd);

    //let authParams = new HttpParams();
    //let authHeaders = new HttpHeaders();
    //authHeaders = authHeaders.append('Authorization', 'Basic ' + encodedUser);

    //this.storage.set("userName", userName);
    this.storage.set("encodedUser", encodedUser);

    //return this.http.get(this.authURL + "/", { observe: 'response', params: authParams, headers: authHeaders});
  }
}
