import { JokeDetailsModule } from './joke-details/joke-details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, JokeDetailsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
