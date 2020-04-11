import { Component, OnInit, Input } from '@angular/core';
import { DayFormatter } from '../day_formatter.pipe'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;

  constructor() {
   }

  ngOnInit(): void {
    // debugger
  }

  formatDay = (day) => {
    let yyyy = day.slice(0,4)
    let mm = day.slice(4,6)
    let dd = day.slice(6,8)

    return `${mm}/${dd}/${yyyy}`
  }

}
