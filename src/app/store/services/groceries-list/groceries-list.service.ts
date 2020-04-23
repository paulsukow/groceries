import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Product as Entity } from '../../models/product'
import { getGroceriesListCollection, getGroceriesListEntityById, State } from '../../reducers'

@Injectable({
  providedIn: 'root'
})
export class GroceriesListService {

  constructor(private store: Store<State>) {
  }

  public getCollection(): Observable<Entity[]> {
    return this.store.select(getGroceriesListCollection)
  }

  public getEntityById(id: number): Observable<Entity> {
    return this.store.select(getGroceriesListEntityById, {
      id,
    })
  }
}
