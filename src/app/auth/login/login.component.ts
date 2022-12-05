import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import authActions from 'src/app/store/actions/auth';
import { ToastrService } from 'ngx-toastr';

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
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  getControl(controlName: string) {
    return this.loginForm.get(controlName);
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
      this.store.dispatch(authActions.loginInitiate({ email, password }));
    } else {
      this.toasterService.error('Error', 'Error2');
    }
  }
}
