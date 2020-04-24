import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Product as Entity } from '../../models/product'
import { getGroceriesListCollection, getGroceriesListEntityById, State } from '../../reducers'
import { createEntity } from '../../actions/groceries-list.action'

@Injectable({
  providedIn: 'root'
})
export class GroceriesListService {

  constructor(private store: Store<State>) {
  }

  public getCollection(): Observable<Entity[]> {
    return this.store.select(getGroceriesListCollection)
  }

  public getEntityById(id: string): Observable<Entity> {
    return this.store.select(getGroceriesListEntityById, {
      id,
    })
  }

  createEntity(name: string): void {
    const id = Math.random()
      .toString(36)
      .substring(7)

    const entity: Entity = {
      id,
      name,
    }

    this.store.dispatch(createEntity({entity}))
  }
}
