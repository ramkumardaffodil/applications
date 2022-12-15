import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}
  getUserId() {
    return localStorage.getItem('userId')
      ? JSON.parse(localStorage.getItem('userId')!)
      : '';
  }
  getAccessToken() {
    return localStorage.getItem('accessToken')
      ? JSON.parse(localStorage.getItem('accessToken')!)
      : '';
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
      ? JSON.parse(localStorage.getItem('refreshToken')!)
      : '';
  }
  cacheUserDetail(data: any) {
    const { userId, accessToken, refreshToken } = data;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  }
  removeUserDetail() {
    const userDetails = ['userId', 'accessToken', 'refreshToken'];
    userDetails.forEach((detail: string) => {
      localStorage.removeItem(detail);
    });
  }
}
