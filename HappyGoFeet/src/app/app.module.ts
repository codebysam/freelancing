import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basicComponents/header/header.component';
import { MainContainerComponent } from './basicComponents/main-container/main-container.component';
import { AboutUsComponent } from './navComponents/about-us/about-us.component';
import { HomeComponent } from './navComponents/home/home.component';
import { ContactUsComponent } from './navComponents/contact-us/contact-us.component';
import { ActivitiesComponent } from './navComponents/activities/activities.component';
import { ProgrammesComponent } from './navComponents/programmes/programmes.component';
import { GalleryComponent } from './navComponents/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ActivitiesComponent,
    ProgrammesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
