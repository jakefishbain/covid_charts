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
  day_count: number = 10;
  day_count_array: any[] = Array(this.day_count)
  mode: string = 'd';
  abbv: string;
  show_diff: boolean = false;

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
    let day_diff = dayjs().diff('2020-03-05', 'day')
    this.day_count_array = Array(day_diff)
  }

  changeDayCount= e => this.day_count = parseInt(e.target.value)

  toggleDiff = () => {
    console.log('togglin!', this.show_diff);
    this.show_diff = !this.show_diff;
    console.log(this.show_diff);
  }

}
