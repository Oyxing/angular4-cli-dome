import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
// 给数据定义类型
import { User } from '../../modeis/user'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  totalOwed:number;
  constructor(
      public userService:UserService
  ) { 
  }
  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
        this.users = user;
        this.getTotalOwed()
    })
  }
  getTotalOwed(){
  let total = 0;
    for(let i = 0;i < this.users.length; i++){
      total += this.users[i].balance;
    }
    this.totalOwed = total
  }
  


}
