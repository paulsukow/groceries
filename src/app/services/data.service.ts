import { Injectable } from '@angular/core'
import { Product } from '../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
    {
      name: 'New event: Trip to Vegas',
      id: 0,
    },
    {
      name: 'Long time no chat',
      id: 1,
    },
    {
      name: 'Report Results',
      id: 2,
    },
    {
      name: 'The situation',
      id: 3,
    },
    {
      name: 'Updated invitation: Swim lessons',
      id: 4,
    },
    {
      name: 'Last minute ask',
      id: 5,
    },
    {
      name: 'Family Calendar - Version 1',
      id: 6,
    },
    {
      name: 'Placeholder Headhots',
      id: 7,
    }
  ]

  constructor() { }

  public getProducts(): Product[] {
    return this.products
  }

  public getProductById(id: number): Product {
    return this.products[id]
  }
}
