import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './state/counter.actions';
import { selectCount } from './state/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$ = this.store.select(selectCount);
  constructor(private store: Store) {}
  increase() {
    this.store.dispatch(counterActions.incrementCounter());
  }
  decrease() {
    this.store.dispatch(counterActions.decrementCounter());
  }
}
