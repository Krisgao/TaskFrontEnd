import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DeleteComponent } from './delete/delete.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ListComponent } from './list/list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { AuthGuard } from './auth/auth.guard';
import { User } from './user/user.module';
import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';






@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
    
  ],
  providers: [TestService,MatDialogModule,MatNativeDateModule, MatDatepickerModule,MatTabsModule,MatIconModule,AuthGuard,UserService],
  bootstrap: [AppComponent],
  entryComponents: [TaskDetailComponent,AddComponent,UpdateComponent,DeleteComponent]
})
export class AppModule { }
