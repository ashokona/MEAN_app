import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
user:Userdetails;
alerts:any;
  constructor(private router:Router) { 
  
 this.alerts = [
          {id:1,types:"Mobile"},
          {id:2,types:"Email"},
          {id:3,types:"SMS"}
     ];
 
this.user={
tenant:"",
Infrastructure:"",
Security:""
}
  }

  ngOnInit() {

   
  }
  clickme(user){
    console.log(user);
    //this.router.navigate(["done"]);
  }

}
interface Userdetails
{
  tenant :String,
  Infrastructure :String,
  Security :String
}