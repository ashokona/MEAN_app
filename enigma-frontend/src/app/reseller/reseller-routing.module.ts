import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResellerDashboardComponent } from './reseller-dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantsComponent } from './components/tenants/tenants.component';
import { AuthGuard } from '../shared/services/auth-gaurd.service';

const routes: Routes = [
  {
      path : 'reseller',
      component : ResellerDashboardComponent,
      canActivate : [AuthGuard],
      children:[
        { path:'', component:DashboardComponent },
        { path:'dashboard', component:DashboardComponent },
        { path:'analytics', component:AnalyticsComponent },
        { path:'tenants', component:TenantsComponent },
        // { path:'notifications', component:NotificationsComponent },
        // { path:'success', component:SuccessComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerRoutingModule { }
