import { Injectable } from "@angular/core";

declare const gapi: any;

@Injectable()
export class UserService {
  constructor() {}

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
  }
}
