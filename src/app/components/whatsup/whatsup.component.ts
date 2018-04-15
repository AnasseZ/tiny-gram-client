import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { MessageService } from '../../services/MessageService';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-whatsup',
  templateUrl: './whatsup.component.html',
  styleUrls: ['./whatsup.component.css']
})
export class WhatsupComponent implements OnInit {

  @Input() avatar: string;
  postResult: string;

  constructor(private messageService: MessageService, private modalService: NgbModal, private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
  }

  postIt(contentInput: string, imgInput: string) {
    let before = new Date();
    /*this.messageService.postMessage(contentInput, imgInput).then( ()=> {
      let after = new Date();
      let difference = after.getTime() - before.getTime();
      this.postResult = difference + " millisecondes  for posting your message!";
    });; */
  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
      this.postResult = "Post not sended.";
    });
  }

  avatarUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.avatar);
  }
}
