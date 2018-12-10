import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExampleService {

  constructor(private http: HttpClient) {

  }

  sampleObservable = () => {
    return this.http.get('https://api.github.com/search/repositories?q=');
  }

  samplePromise = () =>
    this.http.get('https://api.github.com/search/repositories?q=').toPromise();

  usingObservable = () => {
    const apiCall = this.sampleObservable();
    apiCall.subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
    apiCall.subscribe();
  }

  usingPromise = () => {
    this.samplePromise().then(result => {
      console.log(result)
    }, error => { console.log(error) })
  }
}
