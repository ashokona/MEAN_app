import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { NewGroupComponent } from '../new-group/new-group.component';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
  groups:groupInterface[];
  constructor(public dialog: MdDialog,) {
    this.groups = [{
      groupname:'Group1',
      numberofmembers:5,
      lastmodified:'jun 12,2017 22:40'
    }]
   }
  openDialog() {
    let dialogRef = this.dialog.open(NewGroupComponent);
    
  }
  ngOnInit() {
  }

}

class groupInterface {
  groupname:String;
  numberofmembers:Number;
  lastmodified:String
}

