import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
})
export class JokeFormComponent implements OnInit, OnDestroy {
  id: string = '';
  subs$: Subscription = new Subscription();

  comment: string = 'test text';

  joke:string = '';
  author:string= '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subs$.add(
      this.activatedRoute.paramMap.subscribe((data: any) => {
        this.id = data.params.id;
      })
    );

    this.subs$.add(
      this.router.events.subscribe((data) => {
        console.log(data);
      })
    );
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.subs$.unsubscribe();
    }, 5000);
  }

  onCommentChange(value: any) {
    console.log(value);
  }

  onSubmit(value:any){
    console.log(value);
  }
}
