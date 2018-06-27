import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jsonp } from "@angular/http";
import { User } from '../modeis/user';
import { CallBack } from '../publiccall/callback';
import { CookieService } from 'ngx-cookie-service';
import "rxjs/add/operator/map";
var i = 0
@Injectable()
export class UserService {
  constructor(
      public http:Http,
      public callBack:CallBack,
      public jsonp:Jsonp
  ) { }
  getUsers(){
    return this.jsonp.get("http://localhost:8080/API/Get/?" + this.callBack.sayHello())
          .map( res => res.json() )
  }
  newUser(user:User){
    user["balance"] = Number(user.balance)
    return this.jsonp.get("http://localhost:8080/API/Post?jsoninfo="+JSON.stringify(user)+"&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
  getUser(id:string){
    return this.jsonp.get("http://localhost:8080/API/GetUser?id="+ id + "&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
  updateBalance(id,user){
    user["Id"] = parseInt(id)
    user["Balance"] = Number(user.Balance)
    return this.jsonp.get("http://localhost:8080/API/PutUser?jsoninfo="+JSON.stringify(user)+"&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
  deleteUser(id){
    return this.jsonp.get("http://localhost:8080/API/DeleteUser?id="+ id + "&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
  updateUser(id,user){
    user["Id"] = parseInt(id)
    user["balance"] = Number(user.balance)
    return this.jsonp.get("http://localhost:8080/API/PutUser?jsoninfo="+JSON.stringify(user)+"&"+this.callBack.sayHello())
          .map( res =>  res.json() )
  }
}
