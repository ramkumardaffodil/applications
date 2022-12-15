import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApplicationsComponent } from './dashboard/applications/applications.component';
import { CreateApplicationComponent } from './dashboard/create-application/create-application.component';
import { HomeComponent } from './dashboard/home/home.component';
import { IsAuthGuard } from './is-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [] },
  {
    path: 'applications',
    component: ApplicationsComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'create-application',
    component: CreateApplicationComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'edit-application/:rowId',
    component: CreateApplicationComponent,
    canActivate: [IsAuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
