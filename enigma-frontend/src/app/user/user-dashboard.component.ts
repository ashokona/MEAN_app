import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  logout() {
    this.userService.purgeAuth();
    this.router.navigate(['/']);
  }

}
