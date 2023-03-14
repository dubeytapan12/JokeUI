import { Component, OnInit } from '@angular/core';
import { Joke } from './Joke';
import { JokeService } from './joke.service';
import { JokeCount } from './JokeCount';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  joke: Joke = new Joke();
  jokeCount: JokeCount = new JokeCount();
  constructor(private jokeService:JokeService) {}
  ngOnInit(): void {
     this.GetJoke();
     this.jokeService.GetJokeCount().subscribe({
      next: item=> this.jokeCount=item
     })
  }
  GetJoke() {
    this.jokeService.GetRandomJoke().subscribe({
      next: item=> this.joke=item
    });
  }
}
