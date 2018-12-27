import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public cookieService: CookieService,
    public router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if (!this.cookieService.get("LoginState")) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    })
  }



}
