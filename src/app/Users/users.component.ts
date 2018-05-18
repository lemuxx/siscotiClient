import { Component, OnInit } from '@angular/core';
import { userService } from './users.service';
import { User } from './users';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html'
})

export class UserComponent implements OnInit {
  users: User[];
  user1: User;
  user2: User;
  constructor(private userSrv: userService){
    this.user1 = {
      "id_user": null,
      "name_user": "Liz",
      "mail_user": "liz@gmail.com",
      "password_user": "12345",
      "telephone_user": "773574893",
      "status_user": null
    }
    this.user2 = {
      "id_user": 3,
      "name_user": "Liz Lo",
      "mail_user": "lizlo@gmail.com",
      "password_user": "1234567",
      "telephone_user": "7735748979",
      "status_user": null
    }

  }

  ngOnInit(){

  }

  getUsers(){
    this.userSrv.getUsers()
        .subscribe(
            resultArray => this.users = resultArray,
            error => console.log("Error :: " + error)
    )
  }

  addUser(){
    this.userSrv.addUser(this.user1).subscribe(data => {
      console.log(data);
    })
  }

  updateUser(){
    this.userSrv.updateUser(this.user2).subscribe(data => {
      console.log(data);
    })
  }
}
