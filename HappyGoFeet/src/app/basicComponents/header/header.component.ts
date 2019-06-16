import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)' : 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {

  static showNavBarFlag = true;
  static menubtnClicked = false;
  constructor() { }

  ngOnInit() {
    this.onResize(null);
  }

  onResize(event){
    if(window['innerWidth'] < 900){
      HeaderComponent.showNavBarFlag = false;
    }
    else
    {
      HeaderComponent.showNavBarFlag = true;
    }
  }

  showNavbar(){
    HeaderComponent.showNavBarFlag = !HeaderComponent.showNavBarFlag;
    HeaderComponent.menubtnClicked = true;
  }

  getShowNavBarFlag(){
    return HeaderComponent.showNavBarFlag;
  }

}
