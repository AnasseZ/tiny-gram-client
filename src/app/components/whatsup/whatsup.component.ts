import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-whatsup',
  templateUrl: './whatsup.component.html',
  styleUrls: ['./whatsup.component.css']
})
export class WhatsupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  postIt() {
    this.userService.findAllUser();
  }
}
