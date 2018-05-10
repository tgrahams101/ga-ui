import { Directive } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: 'interval-dir',
  outputs: ['everySecond']
})

export class IntervalDir {
  everySecond = new EventEmitter();

  constructor() {
    setInterval(() => this.everySecond.emit('event'), 5000);
    // (() => {
    //     this.everySecond.emit('event');
    // })();
  }
}