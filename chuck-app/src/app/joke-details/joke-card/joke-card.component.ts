import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges {

  @Input() 
  jokeText: string = 'Chuck Norris uses tabasco sauce instead of visine';

  @Output()
  buttonClicked: EventEmitter<string>  = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }

  ngOnInit(): void {
    console.log('component intiliazded');
  }

  likeClicked():void {
    this.buttonClicked.emit('like clicked');
  }

}
