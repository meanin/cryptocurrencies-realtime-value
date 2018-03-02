import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { BitcoinComponent } from './bitcoin.component';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [BitcoinComponent],
  providers: [BitcoinService]
})
export class BitcoinModule { }
