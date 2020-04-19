export interface Product {
  name: string
  id: number
  category?: string
  storePrices?: StorePrice[]
}

export interface StorePrice {
  store: string,
  price: number
  quantity?: number
  unit?: string
  notes?: string
}
