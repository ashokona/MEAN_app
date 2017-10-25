import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  data:dataDetails;
    constructor(public dialog: MdDialog) { 
      this.data = {
        groupname : ''
      }
    }

    ngOnInit() {
    }
    add(data){
      console.log(data);
      this.dialog.closeAll();
    }
    cancel(){
      this.dialog.closeAll();
    }
}
  class dataDetails {
    groupname :String;
  }
