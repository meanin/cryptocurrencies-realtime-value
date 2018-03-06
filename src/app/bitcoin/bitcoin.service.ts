import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bitcoin, HistoricalBpi } from './coindesk';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class BitcoinService {
  private _apiUrl: string = 'https://api.coindesk.com/v1/bpi';

  constructor(private _http: HttpClient, private _datepipe: DatePipe) { }

  getBitcoinValue(): Observable<Bitcoin> {
    return this._http.get<Bitcoin>(`${this._apiUrl}/currentprice.json`);
  }

  getHistoricalBitcoinValue(): Observable<HistoricalBpi> {
    let tenDaysAgo = this._datepipe.transform(new Date(Date.now() - 10*(1000*60*60*24)), 'yyyy-MM-dd');
    let oneDayAgo = this._datepipe.transform(new Date(Date.now() - 1*(1000*60*60*24)), 'yyyy-MM-dd');

    return this._http.get<HistoricalBpi>(`${this._apiUrl}/historical/close.json?start=${tenDaysAgo}&end=${oneDayAgo}`)
        .map(response => response as HistoricalBpi);
  }
}
