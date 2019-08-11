import { NgModule } from '@angular/core';
import { StoreModule, combineReducers, ActionReducer, compose } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromQuote from './quote.reducer';

import { environment } from '../environment/environment';
 '../actions/class';

 // 集合所有reducers
export interface State {
  quote: fromQuote.State;
};

const initialState: State = {
  quote: fromQuote.initialState,
};

const reducers = {
  quote: fromQuote.reducer,

}

const productionReducers: ActionReducer<State> = combineReducers(reducers);

const developReducers:  ActionReducer<State> = compose(storeFreeze, combineReducers(reducers));


export function reducer(state = initialState, action: { type: string, payload: any }): State {
  if(environment.production){
    return productionReducers(state, action);
  } else {
    return productionReducers(state, action);
  }

}

@NgModule({
  declarations: [],
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ]
})
export class AppStoreModule { }
