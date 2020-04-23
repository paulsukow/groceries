import { createReducer, on } from '@ngrx/store'
import * as fromGroceriesList from '../actions/groceries-list.action'
import { DefaultStores, Units } from '../../constants'
import { Product } from '../models/product'

export interface GroceriesListState {
  data: Product[]
}

export const initialState: GroceriesListState = {
  data: [
    {
      name: 'Peanuts',
      id: 0,
      category: 'bulk',
    },
    {
      name: 'Oatmeal',
      id: 1,
      category: 'Bulk',
    },
    {
      name: 'bananas',
      id: 2,
      category: 'produce',
    },
    {
      name: 'Apple',
      id: 3,
      category: 'produce',
      storePrices: [
        {
          id: 0,
          store: DefaultStores.sprouts,
          price: 1.29,
          quantity: 1,
          unit: Units.pound,
        },
        {
          id: 1,
          store: DefaultStores.kroger,
          price: 1.50,
          quantity: 1,
          unit: Units.pound,
        },
      ]
    },
  ]
}

export const reducer = createReducer(
  initialState,
  on(fromGroceriesList.createEntity,
    (state, { entity }) => ({
      ...state,
      data: [...state.data, entity]
  })),
  on(fromGroceriesList.deleteEntity,
    (state, { entity }) => ({
      ...state,
      ...state.data.splice(state.data.indexOf(entity), 1)
  })),
)

export const getCollection = (state: GroceriesListState) => state.data
export const getEntityById = (state: GroceriesListState, props: { id: number }) =>
  state.data.find(entity => entity.id === props.id)
