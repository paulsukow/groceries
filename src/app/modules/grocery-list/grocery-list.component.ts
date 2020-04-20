import { Component } from '@angular/core'
import { Product } from '../../models/product'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: 'grocery-list.component.html',
  styleUrls: ['grocery-list.component.scss'],
})
export class GroceryListComponent {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete()
    }, 3000)
  }

  getProducts(): Product[] {
    return this.data.getProducts()
  }

}