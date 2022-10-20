import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { AppsRoutes } from './apps.routing';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [FormsModule,
    CommonModule,
    RouterModule.forChild(AppsRoutes), 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe,
  ],
  bootstrap: [],
})
export class AppsModule { }
