import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('options') options: any;
  @Input('isMultiple') multiple: boolean = false;
  @Input('control') control!: FormControl;
  @Input('controlName') controlName: string = '';
  constructor() {}

  ngOnInit(): void {}
  compareThem(o1: any, o2: any) {
    return o1.value === o2.value;
  }
}
