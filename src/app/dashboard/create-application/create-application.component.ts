import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { createApplication } from 'src/app/store/actions/application';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css'],
})
export class CreateApplicationComponent implements OnInit {
  profileImageUrl: any;
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

  favouriteLanguages = [
    { value: 'c', viewValue: 'C' },
    { value: 'js', viewValue: 'Javascript' },
    { value: 'c++', viewValue: 'C++' },
    { value: 'java', viewValue: 'Java' },
    { value: 'python', viewValue: 'Python' },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.createApplicationForm.valueChanges.subscribe((response) => {
      console.log('value is', response);
    });
  }
  initForm() {
    this.createApplicationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      favouriteLanguage: ['', [Validators.required]],
      interests: ['', [Validators.required]],
      termAndCondition: ['', [Validators.required]],
    });
  }
  getControl(controlName: string) {
    return this.createApplicationForm.get(controlName) as FormControl;
  }
  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  async handleFileChange(event: any, file: any) {
    this.profileImageUrl = await this.getBase64(file.files[0]);
  }
  createApplication() {
    if (this.createApplicationForm.valid) {
      const formValue = this.createApplicationForm.value;
      const userId = JSON.parse(localStorage.getItem('userId')!);
      const payload = {
        ...formValue,
        favouriteLanguage: [formValue.favouriteLanguage],
        userId: userId,
        gender: [formValue.gender],
      };
      this.spinner.show();
      this.store.dispatch(createApplication({ data: payload }));
      console.log('payload is ', payload);
    } else {
      this.createApplicationForm.markAllAsTouched();
    }
  }
}
