import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllApplications } from 'src/app/store/actions/application';
import { IAppState } from 'src/app/store/models/auth';
import { selectApplications } from 'src/app/store/selectors/applications';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit {
  applications: any;
  dataSource: any;
  displayedColumns: any;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getAllApplications());
    this.store.select(selectApplications).subscribe((response) => {
      if (response && response.length > 0) {
        response = JSON.parse(JSON.stringify(response));
        this.dataSource = response?.map((el: any) => {
          delete el._id;
          return el;
        });
        this.displayedColumns = Object.keys(response[0]);
      }
    });
  }
}
