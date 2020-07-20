import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { State } from '../models/state';
import { HelplineNumber } from '../models/helplineNumber';
// import { QueryValueType } from '@angular/compiler/src/core';
// import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
// import { JsonPipe } from '@angular/common';
// import { stringToArray } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  baseStateUrl = environment.apiUrl + 'GetAllState/';
  baseHelpLineUrl = environment.apiUrl + 'GetCentralHelpline/';

  constructor(private http: HttpClient) {}

  async getstate(): Promise<Observable<State[]>> {
    const statePromiseLst = await this.http.get<State[]>(this.baseStateUrl).toPromise();
    return of(statePromiseLst);
  }

  async getCentralHelpLineNumber(): Promise<Observable<HelplineNumber[]>>{
    const helplineInfo = await this.http.get<HelplineNumber[]>(this.baseHelpLineUrl).toPromise();
    return of(helplineInfo);
  }

  async getStateHelpLineNumber(): Promise<Observable<HelplineNumber[]>>{
    const helplineInfo = await this.http.get<HelplineNumber[]>(this.baseHelpLineUrl).toPromise();
    return of(helplineInfo);
  }

  //   async getGovtHelpInfo(): Promise<Observable<State[]>> {

  //     const Promise = await this.http.get<State[]>(this.baseUrl).toPromise();
  //     return of(Promise);
  // }

}
