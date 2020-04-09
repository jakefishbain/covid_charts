import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import * as dayjs from 'dayjs'
dayjs().format()

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnChanges {

  @Input() dropdown_items;
  @Input() selected_state;
  @Input() day_count;
  @Input() day_count_array = [];

  @Output() stateSelected = new EventEmitter();
  @Output() daysSelected = new EventEmitter();

  ngOnChanges() {
    this.getDayCount()
  }

  selectState = (state) => this.stateSelected.emit(state)

  selectDays = (num) => this.daysSelected.emit(num)

  getDayCount = () => {
    let day_diff = dayjs().diff('2020-03-05', 'day')
    this.day_count_array = Array(day_diff)
  }
}
