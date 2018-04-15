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
    this.getUser("u0");
  }

  updateLimit(limit: number) {
    this.limit = limit;
  }

  updateLimitMsg(limitMsg: number) {
    this.limitMsg = limitMsg;
  }

  getUser(userId: String): void {
    let before = new Date();
    this.userService.getUser(userId)
        .subscribe(
            resultArray => {
              this.user = resultArray;
            },
            error => console.log("Error :: " + error)
        )
  }

}
