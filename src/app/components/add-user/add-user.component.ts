import { Component, OnInit } from '@angular/core';
import { User } from '../../modeis/user'
import { FlashMessagesService } from 'angular2-flash-messages'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:User = {
    id:1,
    name:"",
    email:"",
    phone:"",
    balance:0
  }
  disableBalanceOnAdd:boolean = true;
  constructor(
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
      // console.log(value)
      if(!valid){
        this.flashMessagesService.show('填写正确信息', { cssClass: 'alert-success', timeout: 2000 })
      }else{
        console.log("验证成功")
      }
  }

}
