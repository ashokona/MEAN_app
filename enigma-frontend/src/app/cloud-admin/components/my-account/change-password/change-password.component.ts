import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password:passwordDetails
  userDetails : any;
  
  constructor(private userservice:UserService) {
    this.userDetails = this.userservice.getCurrentUser();
     this.password={
      newpwd:'',
      email: "client@test.com"
    }
   }   
   
  ngOnInit() {
    
  }

  ChangePassword(password){
   // let url = '/updatePassword'
    console.log("change password called");
    console.log(password)

    this.userservice.updatePassword(password);
    //this.cloudadminservice.url ='http://localhost:5000/register';
  //  this.cloudadminservice.postService(this.password).subscribe(data =>  {
     
    //console.log(data);
 // });
  
  }
  

}
class passwordDetails{
  email:String;
  newpwd:String;
}
