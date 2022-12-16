import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { createEffect, EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './auth/login/login.component';
import { InputComponent } from './components/input/input.component';
import { AuthEffect } from './store/effects/auth';
import authReducer from './store/reducers/auth';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './dashboard/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateApplicationComponent } from './dashboard/create-application/create-application.component';
import { SelectComponent } from './components/select/select.component';
import { MultiSearchSelectComponent } from './components/multi-search-select/multi-search-select.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import applicationReducer from './store/reducers/application';
import { ApplicationEffect } from './store/effects/application';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TableComponent } from './components/table/table.component';
import { ApplicationsComponent } from './dashboard/applications/applications.component';
import { SharedModule } from './shared/shared.module';
// import { MatSelectModule } from '@angular/material/select';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
    HomeComponent,
    CreateApplicationComponent,
    SelectComponent,
    MultiSearchSelectComponent,
    RadioButtonsComponent,
    CheckboxComponent,
    TableComponent,
    ApplicationsComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        application: applicationReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffect, ApplicationEffect]),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
