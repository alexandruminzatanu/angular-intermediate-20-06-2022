import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDetailsRoutingModule } from './joke-details-routing.module';
import { JokeCardComponent } from './joke-card/joke-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    JokeCardComponent
  ],
  imports: [
    CommonModule,
    JokeDetailsRoutingModule,
    MatCardModule
  ],
  exports: [
    JokeCardComponent
  ]
})
export class JokeDetailsModule { }
