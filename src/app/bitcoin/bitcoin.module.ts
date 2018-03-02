import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';


import { BitcoinComponent } from './bitcoin.component';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [BitcoinComponent],
  providers: [BitcoinService, HttpClient]
})
export class BitcoinModule { }
