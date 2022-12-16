import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css'],
})
export class RadioButtonsComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('control') control!: FormControl;
  @Input('controlName') controlName: string = '';
  @Input('options') options: any[] = [];
  @Input('order') order: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  compare(optionValue: any, controlValue: any) {
    return optionValue.value === controlValue.value?.value;
  }
}
