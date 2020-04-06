import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { states } from './states_data.js'

@Component({
  selector: 'app-state-bar-graph',
  templateUrl: './state_bar_graph.component.html',
  styleUrls: []
})

export class StateBarGraph implements OnInit, OnChanges {
  data: any[];
  deathData: any[];
  testData: any[];
  view: any[] = [800, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Count';
  legendTitle: string = 'Years';
  colorScheme;

  @Input() state;
  @Input() mode;
  @Input() day_count;

  state_base_url: string = 'https://covidtracking.com/api/states/daily?state=';


  constructor() {   }

  async ngOnInit() {
    await this.getData(this.state.abbv)
    this.mode === 'd' ? this.formatDeathData() : this.formatTestData()

    console.log('this.day_count', this.day_count);
    console.log('this.state', this.state);
  }

  ngOnChanges() {
    this.ngOnInit()

    this.colorScheme = {
      domain: this.mode == 'd' ? ['#8F0000'] : ['#02539A']
    };
  }

  getData = async (state) => {
    await fetch(this.state_base_url + state).then( async res => this.data = await res.json());
  }

  formatDeathData = () => {
    this.xAxisLabel = this.state.title
    this.data = this.data.slice(0,this.day_count).reverse().map(day => {
        return {
          'name': this.formatDay(day.date.toString()),
          'value': day.deathIncrease
        }
     });
  }

  formatTestData = () => {
    this.xAxisLabel = this.state.title
    this.data = this.data.slice(0,this.day_count).reverse().map(day => {
        return {
          'name': this.formatDay(day.date.toString()),
          'value': day.totalTestResultsIncrease
        }
     });
  }

  formatDay = (day) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}/${yyyy}`
  }
}
