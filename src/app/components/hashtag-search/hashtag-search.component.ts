import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/MessageService';
import { Message } from '../../entity/Message';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.css']
})
export class HashtagSearchComponent implements OnInit {

  limit: number;
  messages: Message[];
  loading: boolean;
  postResult: string;

  constructor(private messageService: MessageService,  private route: ActivatedRoute) {
    this.limit = 5;
    this.loading = false;
    this.route.params.subscribe( params => {
      if(params['hashtag']) this.searchByHashtag(params['hashtag']);
    });
  }

  updateLimit(limit: number) {
    if( this.limit! = limit) {
      this.limit = limit;
    }
}

  ngOnInit() {
  }

  searchByHashtag(hashtag: string) {

    if(hashtag.charAt(0) === "#") {
      hashtag = hashtag.slice(1);
    }
    this.messages = [];
    this.loading = true;
    let before = new Date();
    this.messageService.getByHashtag(hashtag, this.limit)
        .subscribe(
            resultArray => {
              this.messages = resultArray;            
              let after = new Date();
              this.loading = false;
              let difference = after.getTime() - before.getTime();
              this.postResult = difference + " milliseconds for getting posts with the hashtag " +  hashtag + " !";
            },
            error => console.log("Error :: " + error)
        )
  }

  searchByUser(username: string) {
    this.messages = [];
    this.loading = true;
    let before = new Date();
    this.messageService.getByUsername(username, this.limit)
        .subscribe(
            resultArray => {
              this.messages = resultArray;            
              let after = new Date();
              this.loading = false;
              let difference = after.getTime() - before.getTime();
              this.postResult = difference + " milliseconds for getting posts from " +  username + " !";
            },
            error => console.log("Error :: " + error)
        )
  }
}
