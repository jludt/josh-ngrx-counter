import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CounterEffects } from './state/counter.effects';
import { counterReducer } from './state/counter.reducer';
import { CounterService } from './state/counter.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counterState: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
