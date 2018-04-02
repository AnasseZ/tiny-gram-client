import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/MessageService';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-whatsup',
  templateUrl: './whatsup.component.html',
  styleUrls: ['./whatsup.component.css']
})
export class WhatsupComponent implements OnInit {

  postResult: string;
  after: Date;
  message: Object;

  constructor(private messageService: MessageService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  postIt() {
    this.messageService.postMessage();
  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
      var before = new Date();
     // this.message = this.postIt();
      //var after = new Date();
      //var difference = this.after.getMilliseconds() - before.getMilliseconds();
      //this.postResult = difference + " millisecondes pour poster ce message!";
    }, (reason) => {
      this.postResult = "Poste non envoyé.";
    });
  }
}
