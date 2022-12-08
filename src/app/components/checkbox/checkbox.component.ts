import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('labelPosition') labelPosition: 'after' | 'before' = 'after';
  @Input('control') control!: FormControl;
  @Input('controlName') controlName: string = '';
  @Input('disabled') disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
