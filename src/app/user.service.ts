import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(email,password,confirmPassword){
    debugger
     const body: User = {
       Email: email,
       Password: password,
       ConfirmPassword: confirmPassword
     }
     return this.http.post('https://localhost:44388/api/Account/Register', body);
  }
}
