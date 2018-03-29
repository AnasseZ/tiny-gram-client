import { Injectable } from "@angular/core";

declare const gapi: any;

@Injectable()
export class MessageService {
  constructor() {}

  postMessage(): Date {
    var date = new Date();
    var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";
    gapi.client.load(
      "messageendpoint",
      "v1",
      function() {
        gapi.client.messageendpoint
          .insertMessage({
            postId: "testlol",//Math.floor(Math.random() * 1000) + 1 ,
            content: "Voici un mec qui casse tout.",
            userId: 1,
            hashtags: ["#guts", "#monster", "#berserk"],
            imageUrl: "http...."
          }) 
          .execute(function(resp) {
             date = new Date();
             console.log(resp);  
          });
      },
      rootApi
    );

    return date;
  }

  getTimeLine(): any {
    var rootApi = "https://1-dot-tiny-gram.appspot.com/_ah/api/";
    gapi.client.load(
      "messageendpoint",
      "v1",
      function() {
        gapi.client.messageendpoint
          .listMessage() 
          .execute(function(resp) {
              
             console.log(resp);
             return resp;  
          });
      },
      rootApi
    );
  }
}
