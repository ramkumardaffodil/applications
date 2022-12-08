import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  createApplication(payload: any) {
    return this.http.post(`${this.apiUrl}/create-application`, payload);
  }
}
