import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent, ChartsModule]
})
export class SharedModule { }
