import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = this.fb.control('', [Validators.required, Validators.email]);
  password = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
