import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/services/auth-gaurd.service';

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path : 'dashboard',
        component : DashboardComponent,
        canActivate : [AuthGuard],
    }
]);

@NgModule({
    imports : [
        dashboardRouting,
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations : [
        DashboardComponent
    ],
    providers :  [
        AuthGuard
    ]
})
export class DashboardModule {}
