import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../entity/Message';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
