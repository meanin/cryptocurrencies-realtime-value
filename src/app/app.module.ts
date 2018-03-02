import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BitcoinModule } from './bitcoin/bitcoin.module';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BitcoinModule,
    HomeModule,
    RouterModule.forRoot([
        { path: "home", component: HomeComponent },
        { path: "bitcoin", component: BitcoinComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
