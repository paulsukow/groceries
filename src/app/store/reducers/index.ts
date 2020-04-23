import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store'
import { environment } from '../../../environments/environment'
import * as fromGroceriesList from './groceries-list.reducer'

export interface State {
  groceriesList: fromGroceriesList.GroceriesListState,
}

export const reducers: ActionReducerMap<State> = {
  groceriesList: fromGroceriesList.reducer
}

export const getGroceriesListState = (state: State) => state.groceriesList

export const getGroceriesListCollection = createSelector(
  getGroceriesListState,
  fromGroceriesList.getCollection
)

export const getGroceriesListEntityById = createSelector(
  getGroceriesListState,
  fromGroceriesList.getEntityById
)

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
