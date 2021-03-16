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
    return this.httpClient.post('https://localhost:44388/api/Quote/Add', item);
  }

  deleteData(id) {
    return this.httpClient.delete('https://localhost:44388/api/Quote/Delete?id='+ id +'');
  }

  updateData(id,quote) {
    return this.httpClient.put('https://localhost:44388/api/Quote/Update?id='+ id +'', quote);
  }

  sayHello() {
    return 'Hi from test service';
  }
}
