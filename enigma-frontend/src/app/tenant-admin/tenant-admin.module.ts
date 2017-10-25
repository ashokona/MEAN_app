import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';

import { TenantAdminRoutingModule } from './tenant-admin-routing.module';
import { TenantDashboardComponent } from './tenant-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { SecurityComponent } from './components/security/security.component';
import { LoggingComponent } from './components/logging/logging.component';
import { AuditComponent } from './components/audit/audit.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { DevopsComponent } from './components/devops/devops.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { SubscriptionsComponent } from './components/account-managment/subscriptions/subscriptions.component';
import { BillingComponent } from './components/account-managment/billing/billing.component';
import { ReportsComponent } from './components/account-managment/reports/reports.component';
import { UsersComponent } from './components/user-management/users/users.component';
import { GroupsComponent } from './components/user-management/groups/groups.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TenantAdminRoutingModule,FormsModule
  ],
  declarations: [TenantDashboardComponent, DashboardComponent, MonitoringComponent, SecurityComponent, LoggingComponent,  AuditComponent, AnalyticsComponent, WorkflowComponent, NetworkingComponent, DevopsComponent, NotificationsComponent, IntegrationsComponent, SubscriptionsComponent, BillingComponent, ReportsComponent, UsersComponent, GroupsComponent, RolesComponent]
})
export class TenantAdminModule { }
