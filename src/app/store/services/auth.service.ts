import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginPayload, IRegisterPayload } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  login(payload: ILoginPayload) {
    console.log('@@@@', payload);
    return this.http.post(`${this.apiUrl}/sign-in`, payload);
  }
  register(payload: IRegisterPayload) {
    return this.http.post(`${this.apiUrl}/sign-up`, payload);
  }
}
