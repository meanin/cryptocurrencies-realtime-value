import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { BitcoinService } from './bitcoin.service';
import { Bitcoin, HistoricalBpi } from './coindesk';
import { CurrencyTimestamp } from '../shared/currency-timestamp'


@Component({
  templateUrl: './bitcoin.component.html'
})
export class BitcoinComponent implements OnInit, OnDestroy {
  private _componentDestroy: Subject<boolean> = new Subject();
  bitcoinValueList: Array<CurrencyTimestamp>;

  constructor(private _bitcoinService: BitcoinService) {
    this.bitcoinValueList = new Array<CurrencyTimestamp>();  
    for(let i = 0; i < 10; i++)
    {
      this.bitcoinValueList[i] = new CurrencyTimestamp("", 0);
    }
  }

  getValues(): Array<number> {
    return this.bitcoinValueList.map(v => v.value);
  }

  getLabel(): Array<string> {
    return this.bitcoinValueList.map(v => v.timestamp);
  }

    ngOnInit(): void {  
    this.InitializeSubscribingRealtimeValue();
    this._bitcoinService.getHistoricalBitcoinValue()
      .take(1)
      .subscribe(hBpi => {
        let array: Array<CurrencyTimestamp> = new Array<CurrencyTimestamp>();
        Object.keys(hBpi.bpi).forEach(key => array.push(new CurrencyTimestamp(key, hBpi.bpi[key])));
        this.bitcoinValueList = array;
      });
  }

  private InitializeSubscribingRealtimeValue() {
    Observable.interval(60 * 1000)
      .takeUntil(this._componentDestroy)
      .subscribe(_ => this._bitcoinService.getBitcoinValue()
        .takeUntil(this._componentDestroy)
        .subscribe(this.appendNewBitcoinValue()));
  }

  private appendNewBitcoinValue(): (value: Bitcoin) => void {
    return value => {
      for (let index = 0; index < this.bitcoinValueList.length - 1; index++) {
        this.bitcoinValueList[index] = this.bitcoinValueList[index + 1];
      }

      let currencyVal = new CurrencyTimestamp(value.time.updated, +value.bpi.USD.rate_float);
      this.bitcoinValueList[9] = currencyVal;
    };
  }

  ngOnDestroy(): void {
    this._componentDestroy.next();
    this._componentDestroy.complete();
  }
}
