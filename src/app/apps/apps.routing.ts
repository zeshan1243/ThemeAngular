import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Modern Dashboard',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Modern Dashboard' }]
        }
      },
      
    ]
  }
];
