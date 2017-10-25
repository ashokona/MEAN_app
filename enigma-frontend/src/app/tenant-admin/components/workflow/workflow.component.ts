import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

tenant:workflow;
submitopen:boolean=true;
  constructor(private _userservice:UserService) {

    this.tenant={
      site:''
    }
   }

onSubmit(tenant){
  this.submitopen=false;
  console.log("submit is called");
  alert("Data Submitted Successfully.....");
  this._userservice.workflow(tenant);
  console.log(tenant)
}
  ngOnInit() {
  }

}
class workflow{
  site:String;
  
}
