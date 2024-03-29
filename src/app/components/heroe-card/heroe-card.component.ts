import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number = null;

  @Output() heroeSelected:EventEmitter<number>;

  constructor() {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeSelected.emit(this.index);
  }

}
