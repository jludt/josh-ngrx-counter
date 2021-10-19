import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export interface CounterState {
  counter: number;
}
const initialState: CounterState = { counter: 1 };

export const counterReducer = createReducer(
  initialState,
  on(counterActions.incrementCounter, (state) => ({
    counter: state.counter + 1,
  })),
  on(counterActions.decrementCounter, (state) => ({
    counter: state.counter - 1,
  }))
);
