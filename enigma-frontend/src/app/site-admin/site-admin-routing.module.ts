import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteDashboardComponent } from './site-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { DevopsComponent } from './components/devops/devops.component';
import { SlaComponent } from './components/sla/sla.component';

const routes: Routes = [
   {
      path : 'siteadmin',
      component : SiteDashboardComponent,
      // canActivate : [AuthGuard],
      children:[
        { path:'', component:HomeComponent },
        { path:'home', component:HomeComponent },
        { path:'networking', component:NetworkingComponent },
        { path:'devops', component:DevopsComponent },
        { path:'sla', component:SlaComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAdminRoutingModule { }
