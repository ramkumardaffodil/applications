import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import authActions from 'src/app/store/actions/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {
    this.initForm();
  }

  getControl(controlName: string) {
    return this.registerForm.get(controlName);
  }

  initForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
    });
  }
  register() {
    const { email, password } = this.registerForm.value;
    this.store.dispatch(authActions.registerInitiate({ email, password }));
  }
}
