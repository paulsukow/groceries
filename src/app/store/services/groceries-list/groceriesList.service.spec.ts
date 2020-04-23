import { TestBed } from '@angular/core/testing'

import { GroceriesListService } from './groceries-list.service'

describe('GroceriesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: GroceriesListService = TestBed.get(GroceriesListService)
    expect(service).toBeTruthy()
  })
})
