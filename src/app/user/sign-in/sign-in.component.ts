import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { TokenValues } from 'src/app/TokenValues';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  

  // form: FormGroup = new FormGroup({
  //   username: new FormControl('theusername'),
  //   password: new FormControl('thePassword'),
  // });
  constructor(private router: Router, private authService: AuthService) { }
  isLoginError: boolean = false;
  ngOnInit(): void {
  }

  token: TokenValues;
  submit(username, password) {
   this.authService.validateUser(username, password).subscribe((data: any) => {localStorage.setItem('userToken', data.access_token);
   this.router.navigate(['/list']);
 },
 (error: HttpErrorResponse) => {
   this.isLoginError = true;
 })
    // this.router.navigate(['list']);
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
      
    // }
  }
  

  // @Output() submitEM = new EventEmitter();
  // dologin(){
  //   this.router.navigate(['/list']);
  // }

}
