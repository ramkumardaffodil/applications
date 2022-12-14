import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';
import { environment } from 'src/environments/environment';
import { ILoginPayload, ILoginSuccess, IRegisterPayload } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private cache: CacheService) {}
  login(payload: ILoginPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, payload);
  }
  register(payload: IRegisterPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, payload);
  }
  getUserDetail(): Observable<any> {
    const userId = this.cache.getUserId();
    return this.http.post(`${this.apiUrl}/user-details`, { userId });
  }
  // getUserDetail() {
  //   return JSON.parse(localStorage.getItem('userId') as unknown as any);
  // }
  // cacheUserDetail(data: any) {
  //   const { userId, accessToken, refreshToken } = data;
  //   localStorage.setItem('userId', JSON.stringify(userId));
  //   localStorage.setItem('accessToken', JSON.stringify(accessToken));
  //   localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  // }
}
