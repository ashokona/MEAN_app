import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudAdminDashboardComponent } from './cloud-admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ResellerComponent } from './components/reseller/reseller.component';
import { ServiceCatlogComponent } from './components/service-catlog/service-catlog.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { PasswordPolicyComponent } from './components/tenant/password-policy/password-policy.component';
import { UsersComponent } from './components/user-management/users/users.component';
import { NewUserComponent } from './components/user-management/users/new-user/new-user.component';
import { UsersListComponent } from './components/user-management/users/users-list/users-list.component';
import { GroupsComponent } from './components/user-management/groups/groups.component';
import { ListGroupComponent } from './components/user-management/groups/list-group/list-group.component';
import { NewGroupComponent } from './components/user-management/groups/new-group/new-group.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { NewRoleComponent } from './components/user-management/roles/new-role/new-role.component';
import { ListRolesComponent } from './components/user-management/roles/list-roles/list-roles.component';
import { AccessKeysComponent } from './components/my-account/access-keys/access-keys.component';
import { ChangePasswordComponent } from './components/my-account/change-password/change-password.component';
import { EmailsComponent } from './components/my-account/emails/emails.component';
import { SecurityComponent } from './components/my-account/security/security.component';
import { AuthGuard } from '../shared/services/auth-gaurd.service';

const routes: Routes = [
  {
        path : 'cloudadmin',
        component : CloudAdminDashboardComponent,
       // canActivate : [AuthGuard],
       children:[
           { path:'', component:DashboardComponent },
           { path:'analytics', component:AnalyticsComponent },
           { path:'notifications', component:NotificationsComponent },
           { path:'reseller', component:ResellerComponent },
           { path:'servicecatalog', component:ServiceCatlogComponent },
           { path:'infrastructure', component:InfrastructureComponent },
           { path:'tenant', component:TenantComponent },
           { path:'passwordpolicy', component:PasswordPolicyComponent },
           { path:'upgrades', component:UpgradesComponent },
           { path:'dashboard', component:DashboardComponent },
           { path:'users', children:[
             { path:'', component:UsersListComponent },
             { path:'listuser', component:UsersListComponent },
             { path:'newuser', component:NewUserComponent },
           ] },
           { path:'groups', children:[
             { path:'', component:ListGroupComponent },
             { path:'listgroup', component:ListGroupComponent }
             //{ path:'newuser', component:NewUserComponent },
           ] },
           { path:'roles', children:[
             { path:'', component:ListRolesComponent },
             { path:'listrole', component:ListRolesComponent },
             { path:'newrole', component:NewRoleComponent },
           ] },
           { path:'changepassword', component:ChangePasswordComponent },
           { path:'emails', component:EmailsComponent },
           { path:'security', component:SecurityComponent },
           { path:'accesskeys', component:AccessKeysComponent },
          //  { path:'myaccount', children:[
          //    { path:'', component:ListRolesComponent },
          //    { path:'listrole', component:ListRolesComponent },
          //    { path:'newrole', component:NewRoleComponent },
          //  ] },
       ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudAdminRoutingModule { }
