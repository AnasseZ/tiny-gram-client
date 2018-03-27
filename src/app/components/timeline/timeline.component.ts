import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  postDisplayed: number;
  posts: number[];

  constructor() { 
    this.postDisplayed = 10;
    this.posts = [1,2,3,4,5,5,5];
  }

  ngOnInit() {
  }

}
