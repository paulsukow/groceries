import { createAction, props } from '@ngrx/store'
import { Product as Entity } from '../models/product'

const actionType = `Groceries List`

export const loadCollection = createAction(
  `[${actionType} Service] Load Collection`,
)

export const createEntity = createAction(
  `[${actionType} List Service] Create Entity`,
  props<{ entity: Entity }>(),
)

export const deleteEntity = createAction(
  `[${actionType} List Service] Delete Entity`,
  props<{ entity: Entity }>(),
)
