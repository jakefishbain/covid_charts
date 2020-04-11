import { Component } from '@angular/core';
import { states } from './components/states_data.js'
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
  data: any[];

  private state_base_url: string = 'https://covidtracking.com/api/states/daily?state=';
  private us_url: string = 'https://covidtracking.com/api/us/daily';

  constructor() {
    this.states = states
    this.getData()
  }

  getData = async () => {
    console.log('gettin new data...');

    await fetch(this.state_base_url + this.selected_state.abbv).then( async res => this.data = await res.json());
    this.data = this.data.slice(0,this.day_count).reverse()
  }

  changeState = (state) => {
    this.selected_state = state
    this.getData()
  }

  changeDayCount = (days) => {
    this.day_count = days
    this.getData()
  }
}
