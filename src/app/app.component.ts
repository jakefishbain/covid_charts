import { Component, OnInit } from '@angular/core';
import { states } from './components/states_data.js'
import * as dayjs from 'dayjs'
dayjs().format()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states: any[];
  selected_state: any = { 'abbv': 'USA', 'title': 'United States'};
  day_count: number = 20;
  mode: string = 'deathIncrease';
  abbv: string;
  show_diff: boolean = false;
  data: any[];
  counties_data: any[];

  private state_base_url: string = 'https://covidtracking.com/api/states/daily?state=';
  private us_url: string = 'https://covidtracking.com/api/us/daily';
  private counties_url: string = 'https://corona.lmao.ninja/v2/jhucsse/counties';

  constructor() {
    this.states = states
  }

  async ngOnInit() {
    await this.getData()
    await fetch(this.counties_url).then(
      async res => this.counties_data = await res.json()
    )
  }

  getData = async () => {
    let url = this.selected_state.abbv === 'USA' ? this.us_url : this.state_base_url + this.selected_state.abbv

    await fetch(url).then( async res => this.data = await res.json());
    this.data = this.data.slice(0,this.day_count).reverse()
  }

  changeState = async (state) => {
    this.selected_state = state
    await this.getData()
  }

  changeDayCount = async (days) => {
    this.day_count = days
    await this.getData()
  }
}
