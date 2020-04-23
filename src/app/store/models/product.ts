export interface Product {
  id: number
  name: string
  category?: string
  storePrices?: StorePrice[]
}

export interface StorePrice {
  id: number
  store: string,
  price: number
  quantity?: number
  unit?: string
  notes?: string
  organic?: boolean
}
