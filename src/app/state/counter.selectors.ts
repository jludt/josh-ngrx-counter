import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectFeature =
  createFeatureSelector<CounterState>('counterState');

export const selectCount = createSelector(selectFeature, (count) => {
  return count.counter;
});
