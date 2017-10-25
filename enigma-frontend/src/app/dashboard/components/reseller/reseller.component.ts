import { Component, OnInit, Optional } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { DialogContentComponent } from './new-reseller.component'

@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.scss'],
  providers : [UserService]
})
export class ResellerComponent implements OnInit {
  records: Array<Object>;
  lastDialogResult: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private _dialog: MdDialog
  ) { }

  ngOnInit() {
    this.records = [{
      firstName : 'Krishna',
      lastName : 'Kairi',
      middleName : 'Vamshi',
      mobileNumber : '7702739494',
      email : 'kkairi@innominds.com',
      organisation : 'Innominds Pvt Ltd',
      lastSeen : '21-03-1993'
    },{
      firstName : 'Krishna',
      lastName : 'Kairi',
      middleName : 'Vamshi',
      mobileNumber : '7702739494',
      email : 'kkairi@innominds.com',
      organisation : 'Innominds Pvt Ltd',
      lastSeen : '21-03-1993'
    },{
      firstName : 'Venkat',
      lastName : 'Reddy',
      middleName : 'Kumar',
      mobileNumber : '7867554654',
      email : 'venkat@innominds.com',
      organisation : 'Innominds Pvt Ltd',
      lastSeen : '26-07-1993'
    },{
      firstName : 'Jhon',
      lastName : 'Smith',
      middleName : 'Miller',
      mobileNumber : '+1 344 5677 56677',
      email : 'jsmith@innominds.com',
      organisation : 'HYunhd GHUh',
      lastSeen : '16-11-1986'
    }]
  };

  openDialog() {
    const dialogRef = this._dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigate(['/']);
  }

}




