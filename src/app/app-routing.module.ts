import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './day/day.component';
import { TopicComponent } from './topic/topic.component';


const routes: Routes = [
  {
    path:"",
    component:DayComponent,
  },
  {
    path:"./topic",
    component:TopicComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
