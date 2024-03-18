import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeDashboardComponent } from './time-dashboard/time-dashboard.component';
const routes: Routes = [
  {
    path: "",
    component: TimeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
