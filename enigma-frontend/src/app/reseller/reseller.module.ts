import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';

import { ResellerRoutingModule } from './reseller-routing.module';
import { ResellerDashboardComponent } from './reseller-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantsComponent } from './components/tenants/tenants.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
//import { AuthGuard } from '../shared/services/auth-gaurd.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ResellerRoutingModule
  ],
  declarations: [ResellerDashboardComponent, DashboardComponent, TenantsComponent, AnalyticsComponent]
})
export class ResellerModule { }
