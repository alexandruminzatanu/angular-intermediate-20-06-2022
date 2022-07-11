import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
})
export class JokeFormComponent implements OnInit, OnDestroy {
  id: string = '';
  subs$: Subscription = new Subscription();

  comment: string = 'test text';

  joke: string = '';
  author: string = '';

  reactiveForm: FormGroup = new FormGroup({
    joke: new FormControl('', [Validators.required, Validators.minLength(4)]),
    author: new FormControl('', [this.customValidator('Chuck')]),
  });

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

    this.reactiveForm.controls['joke'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.subs$.unsubscribe();
    }, 5000);
  }

  onCommentChange(value: any) {
    console.log(value);
  }

  onSubmit(value: any) {
    console.log(value);
  }

  reactiveSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.controls['joke'].setValidators([Validators.required]);
    this.reactiveForm.controls['joke'].updateValueAndValidity();
  }

  customValidator(value: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = control.value === value;
      return invalid ? { badValue: 'Chuck cant jokes' } : null;
    };
  }
}
