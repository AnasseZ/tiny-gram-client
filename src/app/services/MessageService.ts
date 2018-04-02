import { Injectable } from "@angular/core";

declare const gapi: any;

@Injectable()
export class MessageService {
  constructor() {}

  postMessage() : any{
    let promise = new Promise((resolve, reject) => {
      var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";

      gapi.client.load(
        "messageendpoint",
        "v1",
        function() {
          return gapi.client.messageendpoint
            .insertMessage({
              postId: "testlol", //Math.floor(Math.random() * 1000) + 1 ,
              content: "Young guts.",
              userId: 1,
              hashtags: ["#guts", "#monster", "#cassetout"],
              imageUrl: "https://www.ecranlarge.com/uploads/image/001/009/berserk-photo-berserk-1009624.jpg"
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
  
  getTimeLine(): any {
    let promise = new Promise((resolve, reject) => {
      var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";

      gapi.client.load(
        "messageendpoint",
        "v1",
        function() {
          return gapi.client.messageendpoint
            .listMessage()
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
