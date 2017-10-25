import { Component, Optional , OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router} from '@angular/router';
// import { MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [DashboardService]
})
export class DashboardComponent implements OnInit {
  isDarkTheme = false;
  lastDialogResult: string;
  socket: any = null;
  progress = false;
  serverConsoleLogs = 'Logs';
  constructor(
    private dashboardService: DashboardService,
    private userService: UserService,
    private router: Router
  ) {
    this.socket = io(environment.socket_url);
    this.socket.on('response', (res) => {
        this.serverConsoleLogs = this.serverConsoleLogs + '/n' + res.data;
        console.log(res);
    });
  }
  ngOnInit() {
        //console.log(this.userService.getCurrentUser())
    };

  trigger() {
    this.progress = true;
    this.socket.emit('lanchInstance', {data : 'hand-shake'});
  }
  logout() {
    this.userService.purgeAuth();
    this.router.navigate(['/']);
  }
  trigger_old() {
    this.progress = true;
    this.dashboardService.trigger()
    .subscribe(
            res => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
    );
  }

  openDialog() {
    console.log('hit');

  }

  showSnackbar() {
    // this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}

