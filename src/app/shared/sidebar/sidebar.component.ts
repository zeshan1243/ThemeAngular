import { Component, Input, OnInit } from '@angular/core';
import { Router ,NavigationStart, Event as NavigationEvent} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
 lSidebarList = [
  { number:'1' ,
   name: 'Dashboard',
    icon: 'fa-solid fa-house' , 
    url:'/dashboard/dashboard1',subMenu:[]}, 
  { number:'1' , name: 'Home', icon: 'fa-solid fa-house', url:'/apps/home',subMenu:[] },
  { number:'2' , name: 'Analytics', icon: 'fa-solid fa-chart-line',subMenu:[]},
  { number:'3' , name: 'Products', icon: 'fa-solid fa-box',subMenu:[]},
  { number:'4' , name: 'Order', icon: 'fa-solid fa-cart-shopping',subMenu:[]},
  { number:'5' , name: 'Settings', icon: 'fa-solid fa-gear',subMenu:[]},
  { number:'6' , name: 'About', icon: 'fa-solid fa-circle-info' , subMenu:[
    {name:'About 1'}
  ]},
 ];
 @Input() sideNavStatus: boolean = false
  constructor(private oRouter : Router) {
   }

  ngOnInit(): void {
    console.log("Menus::",this.lSidebarList);
    
  }

}
