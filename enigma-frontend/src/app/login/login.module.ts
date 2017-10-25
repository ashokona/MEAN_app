import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NoAuthGuard } from '../shared/services/no-auth-gaurd.service';

const loginRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path : '',
        component : LoginComponent,
        canActivate : [NoAuthGuard],
    }
]);

@NgModule({
    imports : [
        loginRouting,
        MaterialModule,
        FormsModule
    ],
    declarations : [
        LoginComponent
    ],
    providers :  [
        NoAuthGuard
    ]
})
export class LoginModule {}
