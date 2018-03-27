import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-whatsup',
  templateUrl: './whatsup.component.html',
  styleUrls: ['./whatsup.component.css']
})
export class WhatsupComponent implements OnInit {

  postResult: string;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  postIt() {
    //this.userService.findAllUser();
    for(var i = 0; i<100000000; i++) {
      var b = 2+2;
    }
  } 

  open(content) {
    this.modalService.open(content).result.then((result) => {
      var before = new Date();
      this.postIt();
      var after = new Date();
      var difference = after.getMilliseconds() - before.getMilliseconds();
      this.postResult = difference + " millisecondes pour poster ce message!";
    }, (reason) => {
      this.postResult = "Poste non envoyé.";
    });
  }
}
