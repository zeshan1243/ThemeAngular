import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DashboardRoutes } from './dashboard.routing';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [FormsModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes), 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Dashboard1Component,
  ],
  providers: [
    DatePipe,
    DecimalPipe,
  ],
  bootstrap: [Dashboard1Component],
})
export class DashboardModule { }
