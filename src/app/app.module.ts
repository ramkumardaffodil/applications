import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './auth/login/login.component';
import { InputComponent } from './components/input/input.component';
import { AuthEffect } from './store/effects/auth';
import authReducer from './store/reducers/auth';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
  ],
  imports: [
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
      },
      {}
    ),
    EffectsModule.forRoot([AuthEffect]),
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
