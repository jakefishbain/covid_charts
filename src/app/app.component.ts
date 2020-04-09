import { Component } from '@angular/core';
import { states } from './components/state_bar_graph/states_data.js'

import * as dayjs from 'dayjs'
dayjs().format()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states: any[];
  selected_state: any = { 'abbv': 'IL', 'title': 'Illinois' };
  day_count: number = 10;
  // day_count_array: any[];
  mode: string = 'deathIncrease';
  abbv: string;
  show_diff: boolean = false;

  constructor() {
    this.states = states
  }

  changeState = (state) => this.selected_state = state
  changeDayCount = (days) => this.day_count = days

  // toggleDiff = () => {
  //   console.log('togglin!', this.show_diff);
  //   this.show_diff = !this.show_diff;
  //   console.log(this.show_diff);
  // }

}
