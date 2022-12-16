import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  createApplication,
  updateApplication,
} from 'src/app/store/actions/application';
import { selectApplications } from 'src/app/store/selectors/applications';

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

  data: any;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.initForm();
  }

  loadData() {
    this.route.params.subscribe((response: any) => {
      if (response?.rowId) {
        this.editMode = true;
        this.store.select(selectApplications).subscribe((applications) => {
          this.data = applications.filter(
            (application) => application._id === response.rowId
          )[0];
        });
      }
    });
  }

  initForm() {
    this.createApplicationForm = this.fb.group({
      firstName: [this.data?.firstName || '', [Validators.required]],
      lastName: [this.data?.lastName || '', [Validators.required]],
      motherName: [this.data?.motherName || '', [Validators.required]],
      fatherName: [this.data?.fatherName || '', [Validators.required]],
      gender: [this.data?.gender[0] || '', [Validators.required]],
      country: [this.data?.country || '', [Validators.required]],
      phoneNumber: [
        this.data?.phoneNumber || '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      favouriteLanguage: [
        this.data?.favouriteLanguage[0] || '',
        [Validators.required],
      ],
      interests: [this.data?.interests || '', [Validators.required]],
      termAndCondition: [
        this.data?.termAndCondition || '',
        [Validators.required],
      ],
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
      if (this.editMode) {
        payload['_id'] = this.data['_id'];
        this.store.dispatch(updateApplication({ data: payload }));
      } else {
        this.store.dispatch(createApplication({ data: payload }));
      }
    } else {
      this.createApplicationForm.markAllAsTouched();
    }
  }
}
