import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CacheService } from './shared/services/cache.service';
import { getUserDetail } from './store/actions/auth';
import { selectAuthState } from './store/selectors/auth';

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
    private cache: CacheService,
    private router: Router
  ) {
    translate.addLangs(['en', 'hin']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hin/) ? browserLang : 'en');
  }
  ngOnInit() {
    if (this.cache.getUserId()) {
      this.drawer.open();
      this.store.dispatch(getUserDetail());
    }
    this.store.select(selectAuthState).subscribe((response: any) => {
      if (response.userId) {
        this.drawer.open();
      }
    });
  }
  selectLanguage(value: string) {
    this.translate.use(value);
  }
  logout() {
    this.drawer.close();
    this.cache.removeUserDetail();
    this.router.navigateByUrl('/login');
    // window.location.reload();
  }
}
