import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data;
  data_format: any[] = [
    { 'header': 'Total Tests', 'key': 'total' },
    { 'header': 'Total Positives', 'key': 'positive' },
    { 'header': 'Total Negatives', 'key': 'negative' },
    { 'header': 'Total Deaths', 'key': 'death' },
    { 'header': 'Currently Hospitalized', 'key': 'hospitalizedCurrently' },
    { 'header': 'Currently in ICU', 'key': 'inIcuCurrently' },
    { 'header': 'Daily Tests', 'key': 'totalTestResultsIncrease' },
    { 'header': 'Daily Positive', 'key': 'positiveIncrease' },
    { 'header': 'Daily Negative', 'key': 'negativeIncrease' },
    { 'header': 'Daily Deaths', 'key': 'deathIncrease' },
  ]
  selected_row: string = 'date';

  constructor() { }

  selectRow = (e) => this.selected_row = e.sortBy

}
