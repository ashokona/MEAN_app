import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SiteAdminRoutingModule } from './site-admin-routing.module';
import { SiteDashboardComponent } from './site-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { DevopsComponent } from './components/devops/devops.component';
import { SlaComponent } from './components/sla/sla.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SiteAdminRoutingModule
  ],
  declarations: [SiteDashboardComponent, HomeComponent, NetworkingComponent, DevopsComponent, SlaComponent]
})
export class SiteAdminModule { }
