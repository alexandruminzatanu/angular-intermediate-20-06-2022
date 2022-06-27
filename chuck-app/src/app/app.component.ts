import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-app';

  likeCount: number = 0;

  displayCard: boolean = false;

  comments: string[] = ['comment1.', 'comment2', 'comment3'];

  buttonClicked(value: string){
    this.title = value;
    this.likeCount++;
  }

  showCard(){
    this.displayCard = true;
  }
}
