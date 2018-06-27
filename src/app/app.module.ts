import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JsonpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
// alter  提示
import { FlashMessagesModule } from 'angular2-flash-messages';
// 引用登录 数据库 框架
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';

//引入服务
import { UserService } from './services/user.service'
import { AuthService } from './services/auth.service'
import { SettingsService } from './services/settings.service'
import { RegisterGuard } from './guards/register.guard'
import { AuthGuard } from './guards/auth.guard';
import { CallBack } from './publiccall/callback';

//设置路由
const appRoutes:Routes = [
   {path:"",component:HomeComponent,canActivate:[AuthGuard]},
   {path:"login",component:LoginComponent},
   {path:"register",component:RegisterComponent,canActivate:[RegisterGuard]},
   {path:"add-user",component:AddUserComponent,canActivate:[AuthGuard]},
   {path:"user/:id",component:UserDetailComponent,canActivate:[AuthGuard]},
   {path:"edit/:id",component:EditUserComponent,canActivate:[AuthGuard]},
   {path:"settings",component:SettingsComponent,canActivate:[AuthGuard]}
  ]

export const firebaseConfig = {
  apiKey: "AIzaSyBG7GcnvYnQwdfnC-bWGta7Fja5lzIPp3U",
  authDomain: "myuser-c3147.firebaseapp.com",
  databaseURL: "https://myuser-c3147.firebaseio.com",
  projectId: "myuser-c3147",
  storageBucket: "myuser-c3147.appspot.com",
  messagingSenderId: "475175493892"
}
// 引用模板
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    SidbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFountComponent
  ],
  // 配置引用
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    FlashMessagesModule,
   
    //生成路由
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  //配置文件
  providers: [
    CookieService,
    UserService,
    AuthService,
    CallBack,
    SettingsService,
    RegisterGuard,
    AuthGuard,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
