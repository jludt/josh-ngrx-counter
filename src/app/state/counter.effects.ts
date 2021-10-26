import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import {
  decrementCounter,
  incrementCounter,
  setCounterValue,
} from './counter.actions';
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
  effectsinit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      concatMap(() => of(this.counterService.getCounterState())),
      map((counter) => setCounterValue({ counter: 6 }))
    )
  );
  constructor(
    private actions$: Actions,
    private store: Store,
    private counterService: CounterService
  ) {}
}
//Browser even Window.focus you can see that happen
