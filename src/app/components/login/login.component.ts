import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'  // 引入服务端
import { FlashMessagesService } from 'angular2-flash-messages'  // alert 显示
import { Router } from '@angular/router'; // 引入路由
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(
    public flashMessagesService:FlashMessagesService,
    public cookieService:CookieService,
    public router:Router,
    public authService:AuthService
  ) { }

  ngOnInit() {

  }
  onSubmit(){
    this.authService.login(this.email,this.password).subscribe(user=>{
      if (user.Success == 0) {
        this.flashMessagesService.show(user.Msg, { cssClass: 'alert-success', timeout: 2000 })
        this.router.navigate(['/']);
        this.cookieService.set("LoginState",this.email)
        this.cookieService.set("UserName",this.email)
      }else{
				this.flashMessagesService.show(user.Msg, { cssClass: 'alert-danger', timeout: 2000 })
				this.router.navigate(['/login']);
			}
    })
  }
}
