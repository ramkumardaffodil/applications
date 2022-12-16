import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

interface ISelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-multi-search-select',
  templateUrl: './multi-search-select.component.html',
  styleUrls: ['./multi-search-select.component.css'],
})
export class MultiSearchSelectComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('options') options: ISelectOption[] = [];
  @Input('controlName') controlName: string = '';
  @Input('control') control!: FormControl;

  optionCtrl = new FormControl();
  filteredOptions: ReplaySubject<ISelectOption[]> = new ReplaySubject<
    ISelectOption[]
  >(1);
  @ViewChild('multiSelect') multiSelect: any;

  constructor() {}
  ngOnInit() {
    this.filteredOptions.next(this.options.slice());
    this.optionCtrl.valueChanges.subscribe(() => {
      this.filterOptions();
    });
  }

  filterOptions() {
    if (!this.options) return;
    let search = this.optionCtrl.value;
    if (!search) {
      this.filteredOptions.next(this.options.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredOptions.next(
      this.options.filter(
        (option: ISelectOption) =>
          option.value.toLowerCase().indexOf(search) > -1
      )
    );
  }
  compareThem(o1: any, o2: any) {
    return o1.value === o2.value;
  }
}
