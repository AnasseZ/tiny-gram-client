import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from '../../services/MessageService';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  postResult: string;
  messages: Object[];
  @Input() limit: number;
  @Input() limitMsg: number;
  loading: boolean;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = [];
    this.postResult = "Gettin your timeline...";
    this.loading = true;
    //this.getTimeLineByLimit();
    //this.getTimeline();
  }

  /*
  getTimeLineByLimit() {
    let before = new Date();
    this.messageService.getTimeLine(this.limit).then( res => { 
      this.messages = res;
      let after = new Date();
      let difference = after.getTime() - before.getTime();
      this.postResult = difference + " milliseconds for getting your timeline!";
    });
  } */
  ngOnChanges(changes) {
    console.log("hello !");
    //this.getTimeline();
  } 

  getTimeline(): void {
    let before = new Date();
    this.messageService.getTimeline(this.limitMsg)
        .subscribe(
            resultArray => {
              this.messages = resultArray;            
              let after = new Date();
              this.loading = false;
              let difference = after.getTime() - before.getTime();
              this.postResult = difference + " milliseconds for getting your timeline!";
            },
            error => console.log("Error :: " + error)
        )
  }
}
