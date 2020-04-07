import { Component, Input, OnChanges } from '@angular/core';
import { states } from './states_data.js'

@Component({
  selector: 'app-state-bar-graph',
  templateUrl: './state_bar_graph.component.html',
  styleUrls: []
})

export class StateBarGraph implements OnChanges {
  data: any[];
  display_data: any[];
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

  async ngOnChanges() {
    await this.getData(this.state.abbv)
    this.xAxisLabel = this.state.title
    // console.log('diff',this.show_diff)
    this.formatData()
    this.checkDiff()

    this.colorScheme = {
      domain: this.getColorScheme()
    };
  }

  getColorScheme = () => {
    console.log('MODE',this.mode);

    switch(this.mode) {
      case 'deathIncrease':
        return ['#8F0000'];
      case 'totalTestResultsIncrease':
        return ['#02539A'];
      case 'positiveIncrease':
        return ['#0f920f'];
      case 'negativeIncrease':
        return ['#9f0d5e']
      default:
        return ''
    }
  }

  getData = async (state) => {
    await fetch(this.state_base_url + state).then( async res => this.data = await res.json());
  }

  checkDiff = () => {
    this.show_diff ? this.formatDiffData(this.mode === 'd' ? 'deathIncrease' : 'totalTestResultsIncrease') : null
  }

  formatData = () => {
    this.data = this.data.slice(0,this.day_count).reverse()
    this.display_data = this.data.map(day => {
        return {
          'name': this.formatDay(day.date.toString()),
          'value': day[this.mode]
        }
     });
  }

  formatDiffData = (mode) => {
    debugger
    this.display_data = this.data.map((day, idx) => {
      return {
        'name': idx > 0 ? `${this.formatDay(this.data[idx-1].date.toString(), false)} - ${this.formatDay(day.date.toString(), false)}` : this.formatDay(day.date.toString()),
        'value': idx > 0 ? day[mode] - this.data[idx-1][mode] : 0
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
