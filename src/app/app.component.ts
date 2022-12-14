import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getUserDetail } from './store/actions/auth';
import { selectAuthState } from './store/selectors/auth';
import { AuthService } from './store/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('drawer', { static: true }) drawer!: any;
  constructor(
    public translate: TranslateService,
    private store: Store<any>,
    private auth: AuthService
  ) {
    translate.addLangs(['en', 'hin']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hin/) ? browserLang : 'en');
  }
  ngOnInit() {
    if (this.auth.getUserDetail()) {
      this.drawer.open();
    }
    this.store.select(selectAuthState).subscribe((response: any) => {
      if (response.userId) {
        this.drawer.open();
      }
    });
    this.store.dispatch(getUserDetail());
  }
  selectLanguage(value: string) {
    this.translate.use(value);
  }
}
