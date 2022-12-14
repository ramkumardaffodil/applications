import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/shared/services/cache.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private cache: CacheService) {}
  createApplication(payload: any) {
    return this.http.post(`${this.apiUrl}/create-application`, payload);
  }
  getAllApplication() {
    const userId = this.cache.getUserId();
    return this.http.post(`${this.apiUrl}/applications`, { userId });
  }
}
