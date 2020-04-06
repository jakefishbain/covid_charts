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
  view = "";

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
  @Input() show_diff

  state_base_url: string = 'https://covidtracking.com/api/states/daily?state=';


  constructor() {   }

  async ngOnInit() {
    await this.getData(this.state.abbv)
    this.show_diff ? this.formatDiffData(this.mode === 'd' ? null : 'totalTestResultsIncrease' ) : this.mode === 'd' ? this.formatDeathData() : this.formatTestData()
    this.xAxisLabel = this.state.title
  }

  ngOnChanges() {
    this.ngOnInit();

    this.colorScheme = {
      domain: this.mode == 'd' ? ['#8F0000'] : ['#02539A']
    };
  }

  getData = async (state) => {
    await fetch(this.state_base_url + state).then( async res => this.data = await res.json());
  }

  formatDeathData = () => {
    this.data = this.data.slice(0,this.day_count).reverse().map(day => {
        return {
          'name': this.formatDay(day.date.toString()),
          'value': day.deathIncrease
        }
     });
  }

  formatTestData = () => {
    this.data = this.data.slice(0,this.day_count).reverse().map(day => {
        return {
          'name': this.formatDay(day.date.toString()),
          'value': day.totalTestResultsIncrease
        }
     });
  }

  formatDiffData = (mode = 'deathIncrease') => {
    let slicedData = this.data.slice(0,this.day_count).reverse()
    this.data = slicedData.map((day, idx) => {
      return {
        'name': idx> 0 ? `${this.formatDay(slicedData[idx-1].date.toString(), false)} - ${this.formatDay(day.date.toString(), false)}` : this.formatDay(day.date.toString()),
        'value': idx > 0 ? day[mode] - slicedData[idx-1][mode] : 0
      }
   });
  }

  formatDay = (day, includeYear = true) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}${includeYear ? '/' + yyyy : ''}`
  }
}
