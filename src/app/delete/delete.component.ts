import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  form: FormGroup;
  description: any;
  ID: any;
  quotetype: any;
  contact: any;
  task: any;
  tasktype: any;
  duedate: any;


  constructor(private mytest: TestService, private router: Router, private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = "Do you want to delete this one?";
    this.ID = data.id;
    this.quotetype = data.type;
    this.contact = data.contact;
    this.task = data.task;
    this.tasktype = data.Tasktype;
    this.duedate = data.Due;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      QuoteID: [this.ID,[]],
      QuoteType: [this.quotetype,[]],
      Contact: [this.contact,[]],
      Task: [this.task,[]],
      DueDate: [this.duedate,[]],
      TaskType: [this.tasktype,[]]

    });
  }

  delete() {
    // this.dialogRef.close(this.form.value);
    this.mytest.deleteData(this.ID).subscribe(
      (error) => {
        console.log(error);
      },
      () => {
        console.log("I'm finished");
      }
    );
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
