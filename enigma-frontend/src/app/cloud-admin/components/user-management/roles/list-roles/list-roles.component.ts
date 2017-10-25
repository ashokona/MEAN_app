import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  roles :RoleDetails[];
  constructor() { 
    this.roles=[
    {rolename:"SuperAdmin",description:"allow all the permissions",numberofmembers:"1"},
    {rolename:"user",description:"restrict the permissions",numberofmembers:"2"}
  ];
  }

  ngOnInit() {
  }

}

class RoleDetails{
  rolename:String;
  description:String;
  numberofmembers:String;
}
