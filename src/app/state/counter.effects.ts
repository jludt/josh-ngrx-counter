import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { decrementCounter, incrementCounter } from './counter.actions';
import { selectCount } from './counter.selectors';
import { CounterService } from './counter.service';

@Injectable()
export class CounterEffects {
  saveCount$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(incrementCounter, decrementCounter),
        concatLatestFrom(() => this.store.select(selectCount)),
        tap(([action, count]) => this.counterService.saveCounterState(count))
      ),
    {
      dispatch: false,
    }
  );
  constructor(
    private actions$: Actions,
    private store: Store,
    private counterService: CounterService
  ) {}
}
