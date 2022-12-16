import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';
import { environment } from 'src/environments/environment';
import { IRemoveApplication } from '../../models/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private cache: CacheService) {}

  createApplication(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-application`, payload);
  }
  updateApplication(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-application`, payload);
  }
  getAllApplication(): Observable<any> {
    const userId = this.cache.getUserId();
    return this.http.post(`${this.apiUrl}/applications`, { userId });
  }
  removeApplication(payload: IRemoveApplication): Observable<any> {
    return this.http.post(`${this.apiUrl}/remove-application`, payload);
  }
}
