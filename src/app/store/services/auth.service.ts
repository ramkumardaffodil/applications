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
    return this.http.post(`${this.apiUrl}/sign-in`, payload);
  }
  register(payload: IRegisterPayload) {
    return this.http.post(`${this.apiUrl}/sign-up`, payload);
  }
  getUserDetail() {
    return JSON.parse(localStorage.getItem('userId') as unknown as any);
  }
  cacheUserDetail(data: any) {
    const { userId, accessToken, refreshToken } = data;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  }
}
