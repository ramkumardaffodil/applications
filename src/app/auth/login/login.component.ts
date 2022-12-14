import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginInitiate } from 'src/app/store/actions/auth';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { map, mergeAll } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private toasterService: ToastrService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loginForm.valueChanges
      .pipe(
        map((data) =>
          this.http.get('https://jsonplaceholder.typicode.com/todos/100')
        )
        // mergeAll()
      )
      .subscribe((response) => {
        // this.http
        //   .get('https://jsonplaceholder.typicode.com/todos/100')
        //   .subscribe((resp2) => {
        console.log('resp2 is ', response);
        // });
      });
  }

  getControl(controlName: string) {
    return this.loginForm.get(controlName) as FormControl;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }
  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(loginInitiate({ email, password }));
    } else {
      this.toasterService.error(this.translate.instant('ERRORS.INVALID_FORM'));
    }
  }
  selectLanguage(value: string) {
    this.translate.use(value);
  }
}
