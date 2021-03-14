import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('https://localhost:44388/api/Quote/GetAll'); ///call to backend
  }

  postData(item) {
    return this.httpClient.post('', item);
  }

  deleData() {
    return this.httpClient.delete('api/values/4');
  }

  updateData() {
    return this.httpClient.put('', {});
  }

  sayHello() {
    return 'Hi from test service';
  }
}