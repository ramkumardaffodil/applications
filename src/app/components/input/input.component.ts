import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input('controlName') controlName: string = '';
  @Input('control') control!: FormControl;
  @Input('type') type: String = '';
  @Input('defaultValue') defaultValue = '';
  @Input('min') min: Number = 0;
  @Input('max') max: Number = 0;
  @Input('minLength') minLength: Number = 0;
  @Input('maxLength') maxLength: Number = 0;
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.control.valueChanges
      // .pipe(
      //   concatMap((value) =>
      //     this.http.get(`https://jsonplaceholder.typicode.com/posts/${value}`)
      //   )
      // )
      .subscribe(
        (response) => {
          console.log('response is ', response);
          this.setErrorMessage();
        },
        (error) => {
          console.log('error is ', error);
        }
      );
  }

  setErrorMessage() {
    this.errorMessage = '';
    if (this.control.hasError('min')) {
      this.errorMessage = `Min value for ${this.label} is ${this.min}`;
    } else if (this.control.hasError('max')) {
      this.errorMessage = `Max value for ${this.label} is ${this.max}`;
    } else if (this.control.hasError('minlength')) {
      this.errorMessage = `Min length for ${this.label} is ${this.minLength}`;
    } else if (this.control.hasError('maxlength')) {
      this.errorMessage = `Max length for ${this.label} is ${this.maxLength}`;
    } else if (this.control.hasError('email')) {
      this.errorMessage = `${this.label} is not valid`;
    } else if (this.control.hasError('pattern')) {
      this.errorMessage = `${this.label} is not valid`;
    }
  }
}
