import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SitesComponent } from './components/sites/sites.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ],
  declarations: [UserDashboardComponent, DashboardComponent, SitesComponent, NotificationsComponent, AnalyticsComponent]
})
export class UserModule { }
