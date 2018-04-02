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
              content: "Voici un mec qui casse tout.",
              userId: 1,
              hashtags: ["#guts", "#monster", "#berserk"],
              imageUrl: "http...."
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
              //date = new Date();
              console.log(resp.items);
              resolve(resp.items);
            });
        },
        rootApi
      );
    });
    return promise;
  }
}
