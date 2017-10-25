import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { BillingComponent } from './components/account-managment/billing/billing.component';
import { ReportsComponent } from './components/account-managment/reports/reports.component';
import { SubscriptionsComponent } from './components/account-managment/subscriptions/subscriptions.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { UsersComponent } from './components/user-management/users/users.component';
import { RolesComponent } from './components/user-management/roles/roles.component';
import { GroupsComponent } from './components/user-management/groups/groups.component';
import { AuthGuard } from '../shared/services/auth-gaurd.service';

const routes: Routes = [
   {
        path : 'tenant',
        component : TenantDashboardComponent,
        canActivate : [AuthGuard],
       children:[
           { path:'', component:DashboardComponent },        
           { path:'dashboard', component:DashboardComponent },
           { path:'analytics', component:AnalyticsComponent },
           { path:'notifications', component:NotificationsComponent },
           { path:'reports', component:ReportsComponent },
           { path:'subscriptions', component:SubscriptionsComponent },
           { path:'billing', component:BillingComponent },
           { path:'monitoring', component:MonitoringComponent },
           { path:'security', component:SecurityComponent },
           { path:'logging', component:LoggingComponent },
           { path:'audit', component:AuditComponent },
           { path:'workflow', component:WorkflowComponent },
           { path:'networking', component:NetworkingComponent },
           { path:'devops', component:DevopsComponent },
           { path:'integrations', component:IntegrationsComponent },   
           { path:'notifications', component:NotificationsComponent },
           { path:'notifications', component:NotificationsComponent },
           { path:'notifications', component:NotificationsComponent }, 
       ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantAdminRoutingModule { }
