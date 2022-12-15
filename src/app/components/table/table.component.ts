import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('dataSource') dataSource: any;
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  viewColumns: any;
  constructor(private router: Router) {}

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
  matSortChange(event: any) {
    // debugger;
  }
  edit(rowData: any) {
    this.router.navigateByUrl(`/edit-application/${rowData._id}`);
  }
  delete(rowData: any) {
    // debugger;
  }
}
