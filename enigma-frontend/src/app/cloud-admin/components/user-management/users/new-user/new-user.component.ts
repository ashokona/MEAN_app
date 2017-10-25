import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CloudAdminService } from '../../../../cloud-admin.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
user:userDetials;

  constructor(
    private router: Router,
        private cloudadminservice :CloudAdminService,
        private route: ActivatedRoute,
  ) { 
   
    this.user={
    uType:"",
    department:"",
    uGroup:"",
    emails:""
      }
  }
groups = [
    {value: 'Group-1', viewValue: 'Group1'},
    {value: 'Group1-2', viewValue: 'Group2'},
    {value: 'Group1-3', viewValue: 'Group3'}
  ];

  
  add(user){
    console.log(user);
    this.router.navigate(['cloudadmin/users']);
  }
  cancel(){
    this.router.navigate(['cloudadmin/users']);
  }
  ngOnInit() {
   
  }

}
class userDetials{
  uType:String;
  department:String;
  uGroup:String;
  emails:String;

}