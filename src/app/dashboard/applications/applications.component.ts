import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import {
  getAllApplications,
  removeApplication,
} from 'src/app/store/actions/application';
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
    private spinner: NgxSpinnerService,
    private router: Router,
    private dialog: MatDialog
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
  delete(event: any) {
    const itme = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        content: 'Are you sure you want to delete this application',
      },
    });
    itme.afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.spinner.show();
        this.store.dispatch(removeApplication({ _id: event._id }));
      }
    });
  }
  edit(event: any) {
    this.router.navigateByUrl(`/edit-application/${event._id}`);
  }
}
