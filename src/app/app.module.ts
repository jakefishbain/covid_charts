import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TableComponent } from './components/table/table.component'

import { DayFormatter } from './components/day_formatter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BarChartComponent,
    TableComponent,
    DayFormatter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
