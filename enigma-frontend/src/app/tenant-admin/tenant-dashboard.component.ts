import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {

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
