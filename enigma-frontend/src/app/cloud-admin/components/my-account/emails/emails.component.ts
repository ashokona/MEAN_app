import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  email:String;
  emailIds:any[];
  backup:String;
  preferences:Number;
  favoriteSeason : Number;
  constructor() { 
     this.email = 'abc@gmail.com';
     this.emailIds = ['abc@gmail.com'];
     this.backup = '1';
     this.preferences = 1;
     this.favoriteSeason = 1;
  }
 
  ngOnInit() {
  }
}
