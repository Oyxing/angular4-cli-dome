import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

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

//设置路由
const appRoutes:Routes = [
   {path:"",component:HomeComponent},
   {path:"login",component:LoginComponent},
   {path:"register",component:RegisterComponent},
   {path:"add-user",component:AddUserComponent}
]
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
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    //生成路由
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
