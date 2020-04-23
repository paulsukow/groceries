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

export function reducer(
  state = initialState,
  action: fromGroceriesList.ActionsUnion
): GroceriesListState {
  switch (action.type) {

    case fromGroceriesList.ActionTypes.CreateEntity: {
      return {
        ...state,
        data: [...state.data, action.payload.entity]
      }
    }

    case fromGroceriesList.ActionTypes.DeleteEntity: {
      return {
        ...state,
        ...state.data.splice(state.data.indexOf(action.payload.entity), 1)
      }
    }

    default: {
      return state
    }
  }
}

export const getCollection = (state: GroceriesListState) => state.data
export const getEntityById = (state: GroceriesListState, props: { id: number }) =>
  state.data.find(entity => entity.id === props.id)
