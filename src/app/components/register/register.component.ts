import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;
  constructor(
  		public authService:AuthService,
  		public flashMessagesService:FlashMessagesService,
  		public router:Router
  	) { }

  ngOnInit() {
  }

  onSubmit(){
		this.authService.register(this.email,this.password).subscribe(user=>{
			if(user.Success == 0){
				this.flashMessagesService.show('用户注册成功', { cssClass: 'alert-success', timeout: 2000 })
				this.router.navigate(['/login']);
			}else{
				this.flashMessagesService.show('用户注册失败', { cssClass: 'alert-danger', timeout: 2000 })
				this.router.navigate(['/register']);
			}
		})
  }

}
