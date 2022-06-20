import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDashboardRoutingModule } from './joke-dashboard-routing.module';
import { JokeListComponent } from './joke-list/joke-list.component';


@NgModule({
  declarations: [
    JokeListComponent
  ],
  imports: [
    CommonModule,
    JokeDashboardRoutingModule
  ]
})
export class JokeDashboardModule { }
