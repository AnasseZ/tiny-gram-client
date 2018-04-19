import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { MessageService } from '../../services/MessageService';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { getSplitedContent } from "../../services/Utils";

@Component({
  selector: 'app-whatsup',
  templateUrl: './whatsup.component.html',
  styleUrls: ['./whatsup.component.css']
})
export class WhatsupComponent implements OnInit {

  @Input() user: Object;
  postResult: string;

  constructor(private messageService: MessageService, private modalService: NgbModal, private sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
  }

  postIt(contentInput: string, imgInput: string) {
    let splitedContent = getSplitedContent(contentInput);

    let incompleteMessage = {
        followers: this.user.followers,
        imageUrl: imgInput,
        userId: this.user.id,
        hashtags: splitedContent.slice(1),
        content: splitedContent[0]
    };

    //console.log(incompleteMessage);

    let before = new Date();
    this.messageService.postMessage(incompleteMessage)
        .subscribe(
            resultArray => {           
              let after = new Date();
              let difference = after.getTime() - before.getTime();
              this.postResult = difference + " millisecondes  for posting your message!";
            },
            error => console.log("Error :: " + error)
        );
  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
      this.postResult = "Post not sended.";
    });
  }

  avatarUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.user.avatar);
  }
}
