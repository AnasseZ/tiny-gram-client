import { Injectable } from "@angular/core";

declare const gapi: any;

@Injectable()
export class MessageService {
  constructor() {}

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
  }
  
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
  }
}
