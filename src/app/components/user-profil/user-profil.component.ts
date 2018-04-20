import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';
import { User } from '../../entity/User';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  limit: number;
  limitMsg: number;
  user: User;
  userSearched: User;

  constructor(private userService: UserService, private modalService: NgbModal) {
   }

  ngOnInit() {
    this.limit = 100;
    this.limitMsg = 10;
    this.getUser();
  }

  updateLimit(limit: number) {
      if( this.limit! = limit) {
        this.limit = limit;
        this.getUser();
      }
  }

  updateLimitMsg(limitMsg: number) {
    this.limitMsg = limitMsg;
  }

  getUser(): void {
    this.userService.getUser(this.limit)
        .subscribe(
            resultArray => {
              this.user = resultArray;
            },
            error => console.log("Error :: " + error)
        )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

  findUser(username: string) {
    console.log(username);
    this.userSearched = this.user;
  }

  followUser() {
    console.log(this.user);
    this.userSearched = null;
  }

  updateInformations(username: string, firstname: string, lastname: string, avatar: string) {

  }
}
