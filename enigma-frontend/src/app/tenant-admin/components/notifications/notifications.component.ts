import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  user:nofications;
  submitopen:boolean=true;
 // submithide:boolean=false;
 
  alerts:any;

  constructor(private _userservice:UserService) {
   
   this.user={
          Exceeds:''
   }

    this.alerts = [
          {id:1,types:"Email"},
          {id:2,types:"Mobile"},
          {id:3,types:"SMS"},
          {id:4,types:"None"}
       ];
      
 
   }
  

onSubmit(user){
  console.log(user);
  alert("Data Submitted Succesfully...")
  this._userservice.notifications(user);
 // this.submithide=true;
 // this.submitopen=false;

}
  ngOnInit() {
  }

}
class nofications{

Exceeds:String;
}
