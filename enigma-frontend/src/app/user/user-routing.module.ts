import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SitesComponent } from './components/sites/sites.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AuthGuard } from '../shared/services/auth-gaurd.service';

const routes: Routes = [
  {
        path : 'client',
        component : UserDashboardComponent,
        canActivate : [AuthGuard],
       children:[
           { path:'', component:DashboardComponent },        
           { path:'dashboard', component:DashboardComponent },
           { path:'analytics', component:AnalyticsComponent },
           { path:'notifications', component:NotificationsComponent },
           { path:'sites', component:SitesComponent },
          //  { path:'servicecatalog', component:ServiceCatlogComponent },
          //  { path:'infrastructure', component:InfrastructureComponent },
          //  { path:'tenant', component:TenantComponent },
          //  { path:'upgrades', component:UpgradesComponent },
         //  { path:'usermanagment', component:UpgradesComponent },
          // { path:'dashboard', component:DashboardComponent }
       ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
