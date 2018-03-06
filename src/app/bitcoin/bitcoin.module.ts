import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

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
  providers: [BitcoinService, DatePipe]
})
export class BitcoinModule { }
