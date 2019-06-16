import { Component } from '@angular/core';
import {HeaderComponent} from './basicComponents/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HappyGoFeet';
  closeNavbar(){
    if(window['innerWidth'] < 900){
      if(HeaderComponent.showNavBarFlag && !HeaderComponent.menubtnClicked){
        HeaderComponent.showNavBarFlag = false;
      }
      HeaderComponent.menubtnClicked = false;
    }
    
  }
}
