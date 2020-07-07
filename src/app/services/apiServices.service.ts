import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  baseUrl = environment.apiUrl + 'GetAllState/';

  constructor(private http: HttpClient) {}

  getstate(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl);
  }
}
