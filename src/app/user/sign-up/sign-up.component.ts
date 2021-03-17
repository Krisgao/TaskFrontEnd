import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from '../user.module';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = {
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };
  form: NgForm;
  constructor(private toastr: ToastrService, private router: Router, private userServices: UserService) { }


  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.user = {
        Email: '',
        Password: '',
        ConfirmPassword: ''
      }
    }
  }


  submit(email,password,confirmPassword) {
    // this.router.navigate(['list']);
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    //   this.router.navigate(['/user']);

    // }
    // debugger
    // console.log(this.form.value);

    this.userServices.registerUser(email,password,confirmPassword).subscribe((error) => 
    {
        console.log(error);
        
    },()=>{
      this.resetForm(this.form);
      this.toastr.success("User Registration Successful!");

    });
  }
}
