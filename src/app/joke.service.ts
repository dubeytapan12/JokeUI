import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke } from './Joke';
import { JokeCount } from './JokeCount';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  public GetRandomJoke(): Observable<Joke>
  {
    return this.httpClient
      .get<Joke>( `${this.apiUrl}RandomJoke/GetRandomJoke`);
  }
  public GetJokeCount(): Observable<JokeCount>
  {
    return this.httpClient
      .get<JokeCount>( `${this.apiUrl}RandomJoke/GetJokeCount`);
  }
}
