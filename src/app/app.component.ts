import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from './test.service';
import { Router } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

export interface Quote {
  QuoteID: number;
  QuoteType: string;
  Contact: string;
  Task: string;
  DueDate: Date;
  TaskType: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'QuoteID',
    'QuoteType',
    'Contact',
    'Task',
    'DueDate',
    'TaskType',
    'More'
  ];
  testData;
  mysub: Subscription;
  quotes: Quote[];
  constructor(private mytest: TestService, private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.readData();

  }

 readData(){
  this.mysub = this.mytest.getData().subscribe(
    (data) => {
      this.testData = data;
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log("I'm finished");
    }
  );
 }

  openDetailDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: QuoteID,
      type: QuoteType,
      contact: Contact,
      task: Task,
      Due: DueDate,
      Tasktype: TaskType
      // title: 'Angular For Beginners'
    };

    //this.dialog.open(TaskDetailComponent, dialogConfig);
    const dialogRef = this.dialog.open(TaskDetailComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    // );
  }

  openEditDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: QuoteID,
      type: QuoteType,
      contact: Contact,
      task: Task,
      Due: DueDate,
      Tasktype: TaskType
      // title: 'Angular For Beginners'
    };

    //this.dialog.open(UpdateComponent, dialogConfig);
    const dialogRef = this.dialog.open(UpdateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      // data => console.log("Dialog output:", data)
      () => {
        this.readData();
        console.log("I'm finished");

      }
    );
  }

  openDeleteDialog(QuoteID, QuoteType, Contact, Task, DueDate, TaskType) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: QuoteID,
      type: QuoteType,
      contact: Contact,
      task: Task,
      Due: DueDate,
      Tasktype: TaskType
      // title: 'Angular For Beginners'
    };

    //this.dialog.open(UpdateComponent, dialogConfig);
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      // data => console.log("Dialog output:", data)
      () => {
        this.readData();
        console.log("I'm finished");

      }
    );
  }

  openAddDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    

    //this.dialog.open(TaskDetailComponent, dialogConfig);
    const dialogRef = this.dialog.open(AddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    () => {
      this.readData();
      console.log("I'm finished");}
     );
  }





  title = 'TaskFrontEnd';
  navigate() {
    this.router.navigate(['task']);
  }
  ngOnDestroy() {
    this.mysub.unsubscribe();
  }

}
