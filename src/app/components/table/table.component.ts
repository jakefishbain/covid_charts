import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;
  data_format: any[] = [
    { 'header': 'Daily Tests', 'key': 'totalTestResultsIncrease'},
    { 'header': 'Daily Positive', 'key': 'positiveIncrease'},
    { 'header': 'Daily Negative', 'key': 'negativeIncrease'},
    { 'header': 'Daily Deaths', 'key': 'deathIncrease'},
    { 'header': 'Currently Hospitalized', 'key': 'hospitalizedCurrently'},
    { 'header': 'Currently in ICU', 'key': 'inIcuCurrently'},
  ]

  constructor() {
   }

  ngOnInit(): void {  }

  formatDay = (day) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}/${yyyy}`
  }

}
