import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-counties-table',
  templateUrl: './counties-table.component.html',
  styleUrls: ['./counties-table.component.css']
})
export class CountiesTableComponent implements OnChanges {
  @Input() data;
  @Input() selected_state;
  filtered_data: any[]
  selected_row: string;
  data_format: any[] = [
    { 'header': 'County', 'key': 'county' },
    { 'header': 'Confirmed', 'key': 'stats.confirmed' },
    { 'header': 'Deaths', 'key': 'stats.deaths' },
    { 'header': 'Reccovered', 'key': 'stats.recovered' }
  ]

  constructor() { }

  ngOnChanges(): void {
    this.filtered_data = this.selected_state.abbv === 'USA' ? this.data : this.data.filter( c => c.province === this.selected_state.title )
    this.selected_row = this.selected_state.abbv === 'USA' ? 'province' : 'county';
  }

  selectRow = (e) => this.selected_row = e.sortBy

}
