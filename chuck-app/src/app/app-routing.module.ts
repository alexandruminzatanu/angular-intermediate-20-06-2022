import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorizedGuard } from './authorized.guard';
import { HomeComponent } from './home/home.component';
import { JokeCardComponent } from './joke-details/joke-card/joke-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'joke-card',
    component: JokeCardComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./joke-dashboard/joke-dashboard.module').then(m => m.JokeDashboardModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
