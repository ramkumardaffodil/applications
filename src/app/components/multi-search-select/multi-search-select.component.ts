import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  optionCtrl = new FormControl();
  filteredOptions!: Observable<ISelectOption[]>;
  selectedOptions: any[] = [];
  @ViewChild('dropdownInput') dropdownInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredOptions = this.optionCtrl.valueChanges.pipe(
      startWith(null),
      map((option: any) =>
        option ? this._filteredOption(option) : this.options.slice()
      )
    );
  }
  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedOptions.push(value);
    }
    event.chipInput!.clear();
    this.optionCtrl.setValue(null);
  }

  remove(option: ISelectOption): void {
    const index = this.selectedOptions.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
      this.control.setValue(this.selectedOptions);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push(event.option.value);
    this.control.setValue(this.selectedOptions);
    this.dropdownInput.nativeElement.value = '';
    this.optionCtrl.setValue(null);
  }

  private _filteredOption(value: any) {
    let filterValue: any;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = value.value.toLowerCase();
    }
    return this.options.filter((option: ISelectOption) =>
      option.value.toLowerCase().includes(filterValue)
    );
  }
}
