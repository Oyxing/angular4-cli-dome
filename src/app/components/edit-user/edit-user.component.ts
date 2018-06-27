import { Component, OnInit } from '@angular/core';
import { User } from '../../modeis/user'
import { FlashMessagesService } from 'angular2-flash-messages'  // alert 显示
import { Router,ActivatedRoute,Params } from '@angular/router'; // 引入路由
import { UserService } from '../../services/user.service'  // 引入服务端
import { SettingsService } from '../../services/settings.service'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:string;
  user:User = {
    name:"",
    email:"",
    phone:"",
    balance:0
  }
  disableBalanceOnEdit:boolean = true;
  constructor(
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public userService:UserService,
    public settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"]
    this.userService.getUser(this.id).subscribe(user=>{
      this.user = user.Msg
    })
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    if(!valid){
      this.flashMessagesService.show('填写正确信息', { cssClass: 'alert-danger', timeout: 2000 })
      //  跳转路由
      this.router.navigate(["/edit/"+this.id])
    }else{
      this.userService.updateUser(this.id,value).subscribe(user=>{
        this.flashMessagesService.show('更新成功', { cssClass: 'alert-success', timeout: 2000 })
        this.router.navigate(["/user/"+this.id])
      })
    }
  }
}
