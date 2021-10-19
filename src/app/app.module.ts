import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterEffects } from './state/counter.effects';
import { counterReducer } from './state/counter.reducer';
import { CounterService } from './state/counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counterState: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
