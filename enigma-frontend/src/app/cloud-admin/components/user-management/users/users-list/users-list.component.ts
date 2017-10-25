import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CloudAdminService } from '../../../../cloud-admin.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  path = ''
  users: any[];
  filteredItems: any[];
  constructor(
        private router: Router,
        private cloudadminservice :CloudAdminService,
        private route: ActivatedRoute,
    ) { }
  newUser() {
   this.router.navigate(['cloudadmin/users/newuser']);
  }
  assignCopy(){this.filteredItems = Object.assign([], this.users);
  }
  filterItem(value){
    if(!value) this.assignCopy(); //when nothing has typed
    this.filteredItems = Object.assign([], this.users).filter(
        item => item.email.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }
  
  ngOnInit() {
      this.path = '/allUser'
      this.cloudadminservice.getAllUsers(this.path).subscribe(
            res => {
               this.users = res;
               this.assignCopy();
            },
            (err) => {
                for (const x in err.errors) {
                  if (true) {
                  }
                }
            }
        );;
     // console.log(this.users);
  }

}
