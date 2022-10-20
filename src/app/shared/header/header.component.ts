import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggled = new EventEmitter<boolean>();
menuStatus: boolean = false;
bToggleIcon : boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  SideNavToggle()
  {
    this.menuStatus =!this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }
  toggleDarkTheme()
  {
    document.body.classList.toggle('dark-theme');
    this.bToggleIcon = !this.bToggleIcon;
  }
  
  
  openNav(){
  let x=document.getElementById("mySidenav")as HTMLInputElement ;
  x.style.width = '250px'
}

closeNav() {
  let x= document.getElementById("mySidenav")as HTMLInputElement
  x.style.width = "0";
}
}
