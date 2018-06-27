import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Settings } from '../../modeis/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;
  constructor(
  		public settingsService:SettingsService,
  		public router:Router,
  		public flashMessagesService:FlashMessagesService
  	) { }

  ngOnInit() {
  	this.settings = this.settingsService.getSettings();
  }

  onSubmit(){
  	this.settingsService.changeSettings(this.settings);
  	this.flashMessagesService.show("设置成功!",{cssClass:"alert-success",timeout:2000});
  	this.router.navigate(["/settings"]);
  }

}
