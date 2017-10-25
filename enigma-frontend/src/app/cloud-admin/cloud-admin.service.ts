import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from '../shared/services/api.service';
import { JwtService } from '../shared/services/jwt.service';
import { User } from '../shared/models/user.model'

@Injectable()
export class CloudAdminService {
  path: any;
  constructor(
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService
  ) {}

  getAllUsers(path){
    console.log("get all users called");
    //const route = (path === 'login') ? '/login' : '';
    return this.apiService.get(path)
              .map(data =>{
                //console.log(data);
                const users = data.user;
                let newUsers : any[] = [];
                for(let user of data.user){
                  newUsers.push({
                    email : user.email,
                    username: user.username,
                    role: user.role,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                  })
                }
                return newUsers;
              })
  }

}
