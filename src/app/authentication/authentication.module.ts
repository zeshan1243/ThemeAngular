import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';

import { AuthenticationRoutes } from './authentication.routing';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [],
  bootstrap: [LoginComponent],
})
export class AuthenticationModule { }
