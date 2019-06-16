import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './basicComponents/header/header.component';
import { MainContainerComponent } from './basicComponents/main-container/main-container.component';

const routes: Routes = [
  {
    path : 'header', component: HeaderComponent
  },
  {
    path : 'main-container', component: MainContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
