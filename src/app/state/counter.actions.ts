import { createAction, props } from '@ngrx/store';

export const incrementCounter = createAction('[Counter] Increment Counter');
export const decrementCounter = createAction('[Counter] Decrement Coutner');
export const setCounterValue = createAction(
  '[Application] Set Counter Value',
  props<{ counter: number }>()
);
