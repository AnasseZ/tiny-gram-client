import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/MessageService';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  postDisplayed: number;
  posts: number[];
  messages: Object[];

  constructor(private messageService: MessageService) { 
    this.messages = [];
    this.postDisplayed = 10;
    this.posts = [1,2,3,4,5,5,5];
    this.messageService.getTimeLine().then( res => { console.log("apres then ",res);  this.messages = res});
  }

  ngOnInit() {
  }

}
