import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from './coindesk';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class BitcoinService {
  private _apiUrl: string = 'https://api.coindesk.com/v1/bpi';

  constructor(private _http: HttpClient) { }

  getBitcoinValue(): Observable<Bitcoin> {
    return this._http.get<Bitcoin>(`${this._apiUrl}/currentprice.json`);
  }
}
