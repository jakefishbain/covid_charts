import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TableComponent } from './components/table/table.component'

import { DayFormatter } from './components/day_formatter.pipe'
import { NumFormatter } from './components/num_formatter.pipe';
import { CountiesTableComponent } from './components/counties-table/counties-table.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BarChartComponent,
    TableComponent,
    DayFormatter,
    NumFormatter,
    CountiesTableComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
