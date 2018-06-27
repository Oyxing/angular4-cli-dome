import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages'  // alert 显示
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UserService } from "../../services/user.service"
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id:string;
  user:Object;
  hasBanlance:boolean = true;
  showBalanceUpdataInput:boolean = false;
  constructor(
    public route:ActivatedRoute,
    public userService:UserService,
    public flashMessagesService:FlashMessagesService,
    public router:Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"]
    this.userService.getUser(this.id).subscribe(user=>{
      if(user.Balance > 0){
        this.hasBanlance = false
      }
      this.user = user.Msg
    })

  }
  updateBalance(id:string){
        this.userService.updateBalance(this.id,this.user).subscribe(user=>{
        this.showBalanceUpdataInput = false
        this.flashMessagesService.show('更改成功', { cssClass: 'alert-success', timeout: 2000 })
        this.router.navigate(["/user/"+this.id])
      })
  }
  onDeluserclick(){
    if(confirm("确认删除此用户")){
      this.userService.deleteUser(this.id).subscribe(user=>{
        this.flashMessagesService.show('删除成功', { cssClass: 'alert-success', timeout: 2000 })
        this.router.navigate(["/"])
      })
    }
    
  }

}
