import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private store: Store<IAppState>,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.store.dispatch(getAllApplications());
    this.store.select(selectApplications).subscribe((response) => {
      if (response && response.length > 0) {
        this.dataSource = response;
      }
    });
  }
}
