import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResellerComponent } from './reseller.component';
import { AuthGuard } from '../../../shared/services/auth-gaurd.service';
import {MaterialModule} from '@angular/material';
import { DialogContentComponent } from './new-reseller.component'

const resellersRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path : 'reseller',
        component : ResellerComponent,
        canActivate : [AuthGuard],
    }
]);

@NgModule({
  imports: [
    CommonModule,
    resellersRouting,
    MaterialModule,
  ],
  declarations: [
    ResellerComponent,
    DialogContentComponent,
  ],
  providers : [
    AuthGuard,
  ]
})
export class ResellerModule { }
