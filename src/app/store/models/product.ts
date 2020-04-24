export interface Product {
  id: string
  name: string
  category?: string
  storePrices?: StorePrice[]
}

export interface StorePrice {
  id: string
  store: string,
  price: number
  quantity?: number
  unit?: string
  notes?: string
  organic?: boolean
}
