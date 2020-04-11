import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  public chartType = 'line';

  @Input() data: any[];
  @Input() selected_state;

  public chartDatasets: Array<any> = [
    { data: [], label: '', type: 'line' },
    { data: [], label: '', type: 'bar'}
  ];

  public chartLabels: Array<any> = [];

  public chartOptions: any = {
    responsive: true
  };

  constructor() {}

  async ngOnChanges() {
    console.log('changin...');

    this.chartDatasets = [
      // loop over
      { data: this.formatData('deathIncrease'), label: 'Daily Deaths', type: this.chartType},
      { data: this.formatData('totalTestResultsIncrease'), label: 'Daily Tests', type: this.chartType},
      { data: this.formatData('positiveIncrease'), label: 'Daily Positives', type: this.chartType},
      { data: this.formatData('negativeIncrease'), label: 'Daily Negatives', type: this.chartType},
    ]
    this.chartLabels = this.formatData('date').map(day => this.formatDay(day.toString()))
  }

  changeChartType = (e) => {
    this.chartType = e.target.value
    this.ngOnChanges()
  }

  formatData = (mode) => this.data.map(day => day[mode])

  formatDay = (day) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}/${yyyy}`
  }

}
