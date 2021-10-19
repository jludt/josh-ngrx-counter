import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  saveCounterState(count: number) {
    window.localStorage.setItem('counter', String(count));
  }
  getCounterState() {
    const counter = window.localStorage.getItem('counter') || 0;
    return +counter;
  }
}
