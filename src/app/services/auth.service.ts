import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jsonp } from "@angular/http";
import { Observable } from 'rxjs';
import { CallBack } from '../publiccall/callback';
import { httpIp } from '../publiccall/httpip';
import { AngularFireAuth } from 'angularfire2/auth';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthService {
  constructor(
    public afAuth:AngularFireAuth,
    public cookieService:CookieService,
    public callBack:CallBack,
    public httpIp:httpIp,
    public jsonp:Jsonp
  ) { }
  login(email:string,password:string){
    return this.jsonp.get(this.httpIp.getip()+"/API/Login?jsoninfo="+JSON.stringify({name:email,password:password})+"&"+this.callBack.sayHello())
          .map(res =>  res.json())
  }
  getAuth(){
    return this.afAuth.authState.map(auth=>auth);
  }
  logout(){
    console.log(this.httpIp)
    this.cookieService.set("LoginState","")
  }
  register(email:string,password:string){
    return this.jsonp.get(this.httpIp.getip()+"/API/Register?jsoninfo="+JSON.stringify({name:email,password:password})+"&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
}
