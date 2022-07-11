import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JokeService } from '../joke-form/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  constructor(private router: Router, public jokeService: JokeService) { }

  ngOnInit(): void {
  }

  goToJokeCard() {
    this.router.navigate(['/joke-card']);
  }

}
