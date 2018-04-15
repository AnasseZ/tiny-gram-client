import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

//declare const gapi: any;

@Injectable()
export class MessageService {

  private API_URL = "https://1-dot-tiny-gram.appspot.com/_ah/api/messageendpoint/v1/";

  constructor(private http: Http) {}

  /*
  postMessage(contentInput: string, imgInput: string) : any {
    let promise = new Promise((resolve, reject) => {
      var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";

      gapi.client.load(
        "messageendpoint",
        "v1",
        function() {
          return gapi.client.messageendpoint
            .insertMessage({
              postId:  (Math.floor(Math.random() * 1000) + 1).toString(),
              content: contentInput,
              userId: 1,
              hashtags: ["#guts", "#monster", "#cassetout"],
              imageUrl: imgInput
            })
            .execute(function(resp) {
              //date = new Date();
              //console.log(resp);
              resolve(resp);
            });
        },
        rootApi
      );
    });
    return promise;
  }*/
  
  /* 
  getTimeLine(limit: number): any {
    let promise = new Promise((resolve, reject) => {
      var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";

      gapi.client.load(
        "messageendpoint",
        "v1",
        function() {
          return gapi.client.messageendpoint
            .listMessage("", limit)
            .execute(function(resp) {
              resolve(resp.items);
            });
        },
        rootApi
      );
    });
    return promise;
  } */

  getTimeline(limit: number): Observable<Object[]> {
    return this.http
        .get(this.API_URL +'u280/get-timeline/?limit=' + 10)
        .map((response: Response) => {
            return <Object[]>response.json().items;
        })
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
