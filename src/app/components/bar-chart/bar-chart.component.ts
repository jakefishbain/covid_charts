import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  public chartType = 'bar';
  private state_base_url: string = 'https://covidtracking.com/api/states/daily?state=';
  // private day_count: number = 10;

  // @Input() graph_type: string;
  @Input() data: any[];
  @Input() day_count;
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
    await this.getData()
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

  getData = async () => {
    console.log('gettin new data...');

    await fetch(this.state_base_url + this.selected_state.abbv).then( async res => this.data = await res.json());
    this.data = this.data.slice(0,this.day_count).reverse()
  }

  formatData = (mode) => this.data.map(day => day[mode])

  formatDay = (day) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}/${yyyy}`
  }

}
