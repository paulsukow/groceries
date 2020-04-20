import { Injectable } from '@angular/core'
import { DefaultStores, Units } from '../constants/constants'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
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

  constructor() { }

  public getProducts(): Product[] {
    return this.products
  }

  public getProductById(id: number): Product {
    return this.products[id]
  }
}
