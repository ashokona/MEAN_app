import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';


import {TopBarComponent} from './components/top-bar/top-bar.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    TopBarComponent,
    NavBarComponent
  ],
  declarations: [
    TopBarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
