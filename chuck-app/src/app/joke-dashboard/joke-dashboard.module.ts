import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDashboardRoutingModule } from './joke-dashboard-routing.module';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';


@NgModule({
  declarations: [
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    CommonModule,
    JokeDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JokeDashboardModule { }
