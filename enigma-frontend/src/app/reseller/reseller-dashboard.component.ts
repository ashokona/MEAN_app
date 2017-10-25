import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reseller-dashboard',
  templateUrl: './reseller-dashboard.component.html',
  styleUrls: ['./reseller-dashboard.component.css']
})
export class ResellerDashboardComponent implements OnInit {

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
