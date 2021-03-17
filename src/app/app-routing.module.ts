import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { ListComponent } from './list/list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full' },
  // {path: 'task',  component: TaskDetailComponent },
  // {path: 'add', component: AddComponent},
  // {path: 'app', component: AppComponent},
  {path:'user', component: UserComponent},
  {path: 'list', component: ListComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
