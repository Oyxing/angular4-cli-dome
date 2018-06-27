import { Component, OnInit } from '@angular/core';
import { User } from '../../modeis/user'
import { FlashMessagesService } from 'angular2-flash-messages'  // alert 显示
import { Router } from '@angular/router'; // 引入路由
import { UserService } from '../../services/user.service'  // 引入服务端
import { SettingsService } from '../../services/settings.service'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  user:User = {
    name:"",
    email:"",
    phone:"",
    balance:0
  }
  disableBalanceOnAdd:boolean = true;
  // 定义一个对象
  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public userService:UserService,
    public settingsService:SettingsService
  ) { }

  ngOnInit() {
      this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
      if (this.disableBalanceOnAdd) {
        value.balance = 0
      }
      if(!valid){
        this.flashMessagesService.show('填写正确信息', { cssClass: 'alert-danger', timeout: 2000 })
        //  跳转路由
        this.router.navigate(["add-user"])
      }else{
        this.userService.newUser(value).subscribe(user=>{
          this.flashMessagesService.show('添加成功', { cssClass: 'alert-success', timeout: 2000 })
          this.router.navigate(["/"])
        })
      }
  }

}
