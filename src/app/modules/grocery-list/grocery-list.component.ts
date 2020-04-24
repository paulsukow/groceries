import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from '../../store/models/product'
import { GroceriesListService } from '../../store/services/groceries-list/groceries-list.service'

@Component({
  selector: 'app-home',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.scss'],
})
export class GroceryListComponent {

  newItemInput = ''

  constructor(private groceriesListService: GroceriesListService) {}

  public getProducts(): Observable<Product[]> {
    return this.groceriesListService.getCollection()
  }

  // todo change to reactive forms
  public triggerAddNewItem(): void {
    this.addProduct(this.newItemInput)
    this.clearInput()
  }

  private addProduct(itemName: string): void {
    if (itemName) {
      this.groceriesListService.createEntity(itemName)
    }
  }

  private clearInput(): void {
    this.newItemInput = ''
  }
}
