import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FullDashboardComponent } from './full-dashboard/full-dashboard.component';
import { TimeDashboardComponent } from './time-dashboard/time-dashboard.component';
import { TimeCardComponent } from './time-card/time-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullDashboardComponent,
    TimeDashboardComponent,
    TimeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
