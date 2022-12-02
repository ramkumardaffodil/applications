import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = this.fb.control('', [Validators.required, Validators.email]);
  password = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
