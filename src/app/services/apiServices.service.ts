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

   async getstate(): Promise<Observable<State[]>> {
    const promise = await this.http.get<State[]>(this.baseUrl).toPromise();
    
    return of(promise);
  }
}
