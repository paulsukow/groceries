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
  constructor(private groceriesListService: GroceriesListService) {}

  getProducts(): Observable<Product[]> {
    return this.groceriesListService.getCollection()
  }

}
