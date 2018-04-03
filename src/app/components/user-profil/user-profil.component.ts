import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  limit: number;
  limitMsg: number;

  constructor() {
    this.limit = 100;
    this.limitMsg = 10;
   }

  ngOnInit() {
  }

  updateLimit(limit: number) {
    this.limit = limit;
  }

  updateLimitMsg(limitMsg: number) {
    this.limitMsg = limitMsg;
  }

}
