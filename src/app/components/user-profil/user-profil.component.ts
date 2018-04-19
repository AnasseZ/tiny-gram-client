import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  limit: number;
  limitMsg: number;
  user: Object;

  constructor(private userService: UserService) {
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

}
