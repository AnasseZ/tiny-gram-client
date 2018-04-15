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
    this.limit = limit;
  }

  updateLimitMsg(limitMsg: number) {
    this.limitMsg = limitMsg;
  }

  getUser(): void {
    let userChosed;
    if ( this.limit == 100 ) {
      userChosed = "u0";
    } else if (this.limit == 1000 ) {
      userChosed = "u1";
    } else if (this.limit == 5000 ) {
      userChosed = "u2";
    }

    let before = new Date();
    this.userService.getUser(userChosed)
        .subscribe(
            resultArray => {
              this.user = resultArray;
            },
            error => console.log("Error :: " + error)
        )
  }

}
