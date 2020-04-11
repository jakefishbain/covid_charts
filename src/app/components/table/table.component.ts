import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;
  data_format: any[] = [
    { 'header': 'Total Tests', 'key': 'total' },
    { 'header': 'Total Positives', 'key': 'positive' },
    { 'header': 'Total Negatives', 'key': 'negative' },
    { 'header': 'Total Deaths', 'key': 'death' },
    { 'header': 'Daily Tests', 'key': 'totalTestResultsIncrease' },
    { 'header': 'Daily Positive', 'key': 'positiveIncrease' },
    { 'header': 'Daily Negative', 'key': 'negativeIncrease' },
    { 'header': 'Daily Deaths', 'key': 'deathIncrease' },
    { 'header': 'Currently Hospitalized', 'key': 'hospitalizedCurrently' },
    { 'header': 'Currently in ICU', 'key': 'inIcuCurrently' },
  ]

  constructor() { }

  ngOnInit(): void { }

}
