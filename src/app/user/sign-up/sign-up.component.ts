import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    // this.router.navigate(['list']);
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    //   this.router.navigate(['/user']);
      
    // }
  }
}
