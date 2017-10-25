import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MaterialModule} from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
//import { ResellerModule } from './dashboard/components/reseller/reseller.module'
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AuthGuard } from './shared/services/auth-gaurd.service';
import { NoAuthGuard } from './shared/services/no-auth-gaurd.service';
import { ApiService } from './shared/services/api.service';
import { JwtService } from './shared/services/jwt.service';
import { UserService } from './shared/services/user.service';
import { CloudAdminModule } from './cloud-admin/cloud-admin.module';
import { ResellerModule } from './reseller/reseller.module';
import { UserModule } from './user/user.module';
import { TenantAdminModule } from './tenant-admin/tenant-admin.module';
import { SiteAdminModule } from './site-admin/site-admin.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    ResellerModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    rootRouting,
    HttpModule,
    JsonpModule,
    CloudAdminModule,
    UserModule,
    TenantAdminModule,
    SiteAdminModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    ApiService,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
