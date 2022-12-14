import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}
  getUserId() {
    return JSON.parse(localStorage.getItem('userId') || '');
  }
  getAccessToken() {
    return JSON.parse(localStorage.getItem('accessToken') || '');
  }
  getRefreshToken() {
    return JSON.parse(localStorage.getItem('refreshToken') || '');
  }
  cacheUserDetail(data: any) {
    const { userId, accessToken, refreshToken } = data;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  }
}
