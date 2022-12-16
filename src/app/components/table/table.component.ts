import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('dataSource') dataSource: any;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = [
    'firstName',
    'lastName',
    'gender',
    'country',
    'phoneNumber',
    'favouriteLanguage',
    'termAndCondition',
    'interests',
    'action',
  ];

  pageSizeOptions: any[] = [5];
  pageSize = 5;

  constructor() {}

  ngOnInit(): void {
    this.updateDataSource();
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

  ngOnChanges(changes: SimpleChanges) {
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  matSortChange(event: any) {}

  editApplication(rowData: any) {
    this.edit.emit(rowData);
  }

  deleteApplication(rowData: any) {
    this.delete.emit(rowData);
  }
}
