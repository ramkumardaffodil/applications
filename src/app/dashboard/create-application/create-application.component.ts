import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css'],
})
export class CreateApplicationComponent implements OnInit {
  createApplicationForm!: FormGroup;
  genderOptions = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];
  countryOptions = [
    { value: 'india', viewValue: 'India' },
    { value: 'australia', viewValue: 'Australia' },
    { value: 'usa', viewValue: 'USA' },
    { value: 'mexico', viewValue: 'Mexico' },
    { value: 'canada', viewValue: 'Canada' },
    { value: 'sriLanka', viewValue: 'Sri lanka' },
    { value: 'china', viewValue: 'China' },
    { value: 'japan', viewValue: 'Japan' },
    { value: 'ireland', viewValue: 'Ireland' },
    { value: 'newZealand', viewValue: 'New zealand' },
  ];
  interestOptions = [
    { value: 'cricket', viewValue: 'Cricket' },
    { value: 'it', viewValue: 'IT' },
    { value: 'music', viewValue: 'Music' },
    { value: 'dance', viewValue: 'Dance' },
    { value: 'volleyball', viewValue: 'Volley ball' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.createApplicationForm.valueChanges.subscribe((response) => {
      console.log('value is', response);
    });
  }
  initForm() {
    this.createApplicationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      gender: ['', [Validators.required]],
      country: [''],
      phoneNumber: [''],
      favouriteLanguage: [''],
      salary: [''],
      interest: ['', [Validators.required]],
      favouritePlayers: [''],
      termsAndCondition: [''],
    });
  }
  getControl(controlName: string) {
    return this.createApplicationForm.get(controlName) as FormControl;
  }
}
