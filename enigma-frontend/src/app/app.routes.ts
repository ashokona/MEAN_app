import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path:'**',  redirectTo: '/',},
  { path: 'login', component:  LoginComponent},
 // { path: 'dashboard', component:  DashboardComponent},
  { path: 'cloudadmin', loadChildren:'./cloud-admin/cloud-admin.module#CloudAdminModule'},
  { path: 'reseller', loadChildren:'./reseller/reseller-admin.module#ResellerModule'},
  { path: 'siteadmin', loadChildren:'./site-admin/site-admin.module#SiteAdminModule'},
  { path: 'tenant', loadChildren:'./tenant-admin/tenant-admin.module#TenantAdminModule'},
  { path: 'client', loadChildren:'./user/user.module#UserModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
