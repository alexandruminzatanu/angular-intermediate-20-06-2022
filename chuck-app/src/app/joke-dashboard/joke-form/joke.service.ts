import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  jokeValueFromService: string = '';
  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<any> {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }

  setJokeValueFromService() {
    this.getJoke().subscribe(data => {
      this.jokeValueFromService = data.value;
    })
  }

}
