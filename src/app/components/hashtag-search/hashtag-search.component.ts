import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.css']
})
export class HashtagSearchComponent implements OnInit {

  limit: number;
  constructor() { }

  updateLimit(limit: number) {
    if( this.limit! = limit) {
      this.limit = limit;
    }
}

  ngOnInit() {
    this.limit = 5;
  }
}
