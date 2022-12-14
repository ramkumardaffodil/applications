import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('displayedColumns') displayedColumns: any;
  @Input('dataSource') dataSource: any;

  viewColumns: any;
  constructor() {}

  ngOnInit(): void {
    this.viewColumns = this.displayedColumns.map((el: any) => el.value);
  }
  getValue(columnData: any) {
    let data = '';
    if (Array.isArray(columnData)) {
      data = columnData.reduce((prev, curr) => {
        if (prev.length > 0) {
          prev += ', ' + curr.viewValue;
        } else {
          prev = curr.viewValue;
        }
        return prev;
      }, data);
      return data;
    }
    return columnData;
  }
}
