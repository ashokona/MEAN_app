import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
// import {LoginService} from './login.service';
import {MdSnackBar} from '@angular/material';
import { UserService } from '../shared/services/user.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
//   providers : [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = '';
    password = '';
    authType = '';
    userDetails = User;
    constructor(
        private router: Router,
        public snackBar: MdSnackBar,
        private route: ActivatedRoute,
        // private loginService: LoginService,
        private userService: UserService
    ) {}

    ngOnInit() {
        console.log('hit');
        this.authType = 'login';
        this.route.url.subscribe( data => {
           // console.log(data);
        });
    };

    public login() {
        this.userService.attemptAuth(this.authType, {
                email : this.email,
                password : this.password
            }
        ).subscribe(
            res => {
                let role = res.role.toLocaleLowerCase();
                this.router.navigate([role]);
                
            },
            (err) => {
                for (const x in err.errors) {
                  if (true) {
                    this.openSnackBar(x + ' ' + err.errors[x] , 'Error');
                  }
                }
            }
        );
    }

    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
