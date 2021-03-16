import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  description: any;
  ID: any;
  quotetype: any;
  contact: any;
  task: any;
  tasktype: any;
  duedate: any;

  constructor(private mytest: TestService, private router: Router, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.description = "Add New";
    
    this.quotetype = '';
    this.contact = '';
    this.task = '';
    this.tasktype = '';
    this.duedate = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      QuoteType: [this.quotetype, [Validators.required]],
      Contact: [this.contact, [Validators.required]],
      Task: [this.task, [Validators.required]],
      DueDate: [this.duedate, [Validators.required]],
      TaskType: [this.tasktype, [Validators.required]]

    });
  }

  add() {
    // this.dialogRef.close(this.form.value);
    this.mytest.postData(this.form.value).subscribe(
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
