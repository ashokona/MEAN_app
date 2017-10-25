import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


import { CloudAdminRoutingModule } from './cloud-admin-routing.module';
import { CloudAdminDashboardComponent } from './cloud-admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { ResellerComponent } from './components/reseller/reseller.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ServiceCatlogComponent } from './components/service-catlog/service-catlog.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { UsersComponent } from './components/user-management/users/users.component';
import { GroupsComponent } from './components/user-management/groups/groups.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { SuccessComponent } from './components/success/success.component';
import { NewUserComponent } from './components/user-management/users/new-user/new-user.component';
import { UsersListComponent } from './components/user-management/users/users-list/users-list.component';
import { CloudAdminService } from './cloud-admin.service';
import { ListGroupComponent } from './components/user-management/groups/list-group/list-group.component';
import { NewGroupComponent } from './components/user-management/groups/new-group/new-group.component';
import { ListRolesComponent } from './components/user-management/roles/list-roles/list-roles.component';
import { NewRoleComponent } from './components/user-management/roles/new-role/new-role.component';
import { ChangePasswordComponent } from './components/my-account/change-password/change-password.component';
import { EmailsComponent } from './components/my-account/emails/emails.component';
import { SecurityComponent } from './components/my-account/security/security.component';
import { AccessKeysComponent } from './components/my-account/access-keys/access-keys.component';
import { PasswordPolicyComponent } from './components/tenant/password-policy/password-policy.component';

@NgModule({
  imports: [
    CommonModule,
    CloudAdminRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserModule
  ],
  entryComponents:[NewGroupComponent],
  declarations: [CloudAdminDashboardComponent, DashboardComponent, NotificationsComponent, TenantComponent, InfrastructureComponent, ResellerComponent, AnalyticsComponent, ServiceCatlogComponent, UpgradesComponent, UsersComponent, GroupsComponent, RolesComponent, SuccessComponent, NewUserComponent, UsersListComponent, ListGroupComponent, NewGroupComponent, ListRolesComponent, NewRoleComponent, ChangePasswordComponent, EmailsComponent, SecurityComponent, AccessKeysComponent, PasswordPolicyComponent],
  providers:[CloudAdminService]
})
export class CloudAdminModule { }
