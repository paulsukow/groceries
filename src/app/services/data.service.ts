import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DefaultStores, Units } from '../constants/constants'
import { Product } from '../models/product'
import { getGroceriesListCollection, getGroceriesListEntityById, getGroceriesListState, State } from '../reducers'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public groceriesList: Observable<Product[]>

  constructor(private store: Store<State>) {
    this.groceriesList = this.store.select(getGroceriesListCollection)
  }

  public getProducts(): Observable<Product[]> {
    return this.store.select(getGroceriesListCollection)
  }

  public getProductById(id: number): Observable<Product> {
    return this.store.select(getGroceriesListEntityById, {
      id,
    })
  }
//   createNote(title): void {
//     let id = Math.random()
//       .toString(36)
//       .substring(7);
//
//     let note = {
//       id: id.toString(),
//       title: title,
//       content: ""
//     };
//
//     this.store.dispatch(new NoteActions.CreateNote({ note: note }));
//   }
//
//   deleteNote(note): void {
//     this.store.dispatch(new NoteActions.DeleteNote({ note: note }));
//   }
}
