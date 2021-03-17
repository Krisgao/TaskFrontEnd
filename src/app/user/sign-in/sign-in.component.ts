import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.router.navigate(['list']);
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  dologin(){
    this.router.navigate(['/list']);
  }

}
