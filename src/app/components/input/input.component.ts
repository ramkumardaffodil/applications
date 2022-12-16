import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  errorValue: Number = 0;

  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.control.valueChanges.subscribe(() => {
      this.setErrorMessage();
    });
  }

  setErrorMessage() {
    this.errorMessage = '';
    if (this.control.hasError('min')) {
      this.errorValue = this.min;
      this.errorMessage = `ERRORS.MIN_VALUE_FOR_${this.label}_IS`;
    } else if (this.control.hasError('max')) {
      this.errorValue = this.max;
      this.errorMessage = `ERRORS.MAX_VALUE_FOR_${this.label}_IS`;
    } else if (this.control.hasError('minlength')) {
      this.errorValue = this.minLength;
      this.errorMessage = `ERRORS.MIN_LENGTH_FOR_${this.label}_IS`;
    } else if (this.control.hasError('maxlength')) {
      this.errorValue = this.maxLength;
      this.errorMessage = `ERRORS.MAX_LENGTH_FOR_${this.label}_IS`;
    } else if (this.control.hasError('email')) {
      this.errorMessage = `ERRORS.${this.label}_IS_NOT_VALID`;
    } else if (this.control.hasError('pattern')) {
      this.errorMessage = `ERRORS.${this.label}_IS_NOT_VALID`;
    }
  }
}
