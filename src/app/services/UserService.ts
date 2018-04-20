import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

import { getUserByLimit } from './Utils'; 
import { User } from '../entity/User';

//declare const gapi: any;

@Injectable()
export class UserService {

  private API_URL = "https://1-dot-tiny-gram.appspot.com/_ah/api/userendpoint/v1/";

  constructor(private http: Http) {}

  /*
  findAllUser() {
    console.log("test");

    var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";
    gapi.client.load(
      "userendpoint",
      "v1",
      function() {
        console.log("todos api loaded");

        gapi.client.userendpoint
          .insertUser({
            userName: "Test",
            firstName: "Anasse44",
            lastName: "ZAN",
            followings: ["1", "2", "3"],
            followers: ["4", "5", "6"]
          })
          .execute(function(resp) {
            console.log("fini");
            console.log(resp);
          });
      },
      rootApi
    );
  } */

  getUser(limit: number): Observable<User> {
    return this.http
      .get(this.API_URL +'findUser/' + getUserByLimit(limit))
      .map((response: Response) => {
          return <User[]>response.json();
      })
      .catch(this.handleError);
  }

  findUserByUsername(userName: string) {
    return this.http
      .get(this.API_URL +'find-by-username/' + userName)
      .map((response: Response) => {
          return <User[]>response.json();
      })
      .catch(this.handleError);
  }

  followerUser(user: User, userId: String) {
    return this.http
    .post(this.API_URL + 'follow-user/' + userId, user)
    .map((response: Response) => {
        return <User[]>response.json().items;
    })
    .catch(this.handleError);
  }

  createUser(id: number, user: Object): Observable<Object> {
    return this.http
      .get(this.API_URL +'findUser/' + id)
      .map((response: Response) => {
          return <Object[]>response.json().items;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
