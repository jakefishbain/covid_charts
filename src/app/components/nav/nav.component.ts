import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  @Input() dropdown_items;
  @Input() selected_state;
  @Input() graph_type;
  @Input() graph_types;
  @Output() stateSelected = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  selectState = (state) => {
    this.stateSelected.emit(state)
  }

  selectType = (type) => {
    this.typeSelected.emit(type)
  }
}
