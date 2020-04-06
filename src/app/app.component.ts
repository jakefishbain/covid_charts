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
  selected_state = { 'abbv': 'IL', 'title': 'Illinois' };
  day_count: number = 9;
  day_count_array: any[] = Array(this.day_count)
  mode: string = 'd';
  abbv: string;

  constructor() {
    this.states = states
    this.getDayCount()
  }

  selectState = (e) => {
    this.abbv = e.target.value
    this.selected_state = this.states.find(s => s.abbv === this.abbv);
  }

  selectMode = (e) => this.mode = e.target.value

  getDayCount = () => {
    this.day_count = dayjs().diff('2020-03-05', 'day')
    this.day_count_array = Array(this.day_count)
  }

  changeDayCount= e => this.day_count = parseInt(e.target.value)

}
