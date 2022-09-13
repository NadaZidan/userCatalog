import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/responce.interface';
import { Users } from 'src/app/model/userInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  starRating = 0;

   response:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers(1)
    .subscribe((data:any)=>{
      this.response=data
      console.log(this.response.therapists);
    })

  }

}
