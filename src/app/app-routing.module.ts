import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
const routes: Routes = [

  {path: 'task',  component: TaskDetailComponent },
  {path: 'add', component: AddComponent},
  {path: 'app', component: AppComponent}
  // {path: '', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
