import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './state/counter.actions';
import { selectCount } from './state/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  counter$ = this.store.select(selectCount);
  constructor(private store: Store) {}
  ngOnInit(): void {
    // this.store.dispatch(counterActions.setCounterValue({ counter: 6 }));
  }
  increase() {
    this.store.dispatch(counterActions.incrementCounter());
  }
  decrease() {
    this.store.dispatch(counterActions.decrementCounter());
  }
}
