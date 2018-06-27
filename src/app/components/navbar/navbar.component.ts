import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'  // alert 显示
import { Router } from '@angular/router'; // 引入路由
import { SettingsService } from '../../services/settings.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedInUser:string;
  isLoggedIn:boolean;
  showRegister:boolean;
  constructor(
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public cookieService:CookieService,
    public settingsService:SettingsService
  ) { }
  ngOnInit() {
    this.showRegister = this.settingsService.getSettings().allowRegistration
  }
  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('账号已退出', { cssClass: 'alert-success', timeout: 2000 })
    this.router.navigate(["/login"]);
    this.cookieService.set("LoginState","")
  }

  ngDoCheck(){
    if(this.cookieService.get('LoginState') == "true"){
      this.isLoggedIn = true;
      this.loggedInUser = this.cookieService.get('UserName')
    }else{
      this.isLoggedIn = false;
    }
  }
}
