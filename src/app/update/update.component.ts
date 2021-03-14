import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  description: any;
  ID: any;
  quotetype: any;
  contact: any;
  task: any;
  tasktype: any;
  duedate: any;

  constructor(private router: Router, private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = "Edit";
    this.ID = data.id;
    this.quotetype = data.type;
    this.contact = data.contact;
    this.task = data.task;
    this.tasktype = data.Tasktype;
    this.duedate = data.Due;
  }

  ngOnInit() {
    this.form = this.fb.group({
      QuoteID: [this.ID, []],
      QuoteType: [this.quotetype, []],
      Contact: [this.contact, []],
      Task: [this.task, []],
      DueDate: [this.duedate, []],
      TaskType: [this.tasktype, []]

    });
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
