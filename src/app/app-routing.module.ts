import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';


export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
			},

			{ path: 'apps',  loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
		]
	},
	{
		path: '',
		component: BlankComponent,
		children: [
			{
				path: 'authentication',
				loadChildren:
					() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/authentication/login'
	}
];
