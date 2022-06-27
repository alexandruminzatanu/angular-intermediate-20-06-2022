import { JokeDetailsModule } from './joke-details/joke-details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-dashboard/joke-list/joke-list.component';

@NgModule({
  declarations: [AppComponent, JokeListComponent],
  imports: [BrowserModule, AppRoutingModule, JokeDetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
