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

  constructor(private messageService: MessageService, private modalService: NgbModal) { 
  }

  ngOnInit() {
  }

  postIt(contentInput: string, imgInput: string) {
    let before = new Date();
    this.messageService.postMessage(contentInput, imgInput).then( ()=> {
      let after = new Date();
      let difference = after.getTime() - before.getTime();
      this.postResult = difference + " millisecondes pour poster ce message!";
    });;
  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
      this.postResult = "Poste non envoyé.";
    });
  }
}
