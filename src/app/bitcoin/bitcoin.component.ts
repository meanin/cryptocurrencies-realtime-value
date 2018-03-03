import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { BitcoinService } from './bitcoin.service';
import { Bitcoin } from './coindesk';

@Component({
  templateUrl: './bitcoin.component.html'
})
export class BitcoinComponent implements OnInit, OnDestroy {
  private _callSubscription: Subscription;
  private _bitcoinServiceSubscription: Subscription;
  bitcoinValueList: Array<Bitcoin>;

  constructor(private _bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinValueList = new Array<Bitcoin>(10);
    this._callSubscription = Observable.interval(60 * 1000)
      .subscribe(_ => 
        this._bitcoinServiceSubscription = this._bitcoinService.getBitcoinValue()
          .subscribe(
            this.appendNewBitcoinValue()
          ));
  }

  private appendNewBitcoinValue(): (value: Bitcoin) => void {
    return value => {
      for (let index = 0; index < this.bitcoinValueList.length - 1; index++) {
        this.bitcoinValueList[index] = this.bitcoinValueList[index + 1];
      }
      this.bitcoinValueList[9] = value;
    };
  }

  ngOnDestroy(): void {
    this._callSubscription.unsubscribe();
    this._bitcoinServiceSubscription.unsubscribe();
  }
}
