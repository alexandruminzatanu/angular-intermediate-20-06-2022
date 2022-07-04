import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: JokeListComponent
  },
  {
    path: 'form/:id',
    component: JokeFormComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeDashboardRoutingModule { }
