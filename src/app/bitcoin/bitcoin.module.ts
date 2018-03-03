import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BitcoinComponent } from './bitcoin.component';
import { BitcoinService } from './bitcoin.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BitcoinComponent],
  providers: [BitcoinService]
})
export class BitcoinModule { }
