import { Action } from '@ngrx/store'
import { Product as Entity } from '../models/product'

export enum ActionTypes {
  LoadCollection = '[Groceries List Service] Load Collection',
  CreateEntity = '[Groceries List Service] Create Entity',
  DeleteEntity = '[Groceries List Service] Delete Entity',
}

export class LoadCollection implements Action {
  readonly type = ActionTypes.LoadCollection

  constructor() {}
}

export class CreateEntity implements Action {
  readonly type = ActionTypes.CreateEntity

  constructor(public payload: { entity: Entity }) {}
}

export class DeleteEntity implements Action {
  readonly type = ActionTypes.DeleteEntity

  constructor(public payload: { entity: Entity }) {}
}

export type ActionsUnion = CreateEntity | DeleteEntity | LoadCollection
