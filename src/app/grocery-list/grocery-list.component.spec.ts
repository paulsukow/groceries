import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { ProductComponentModule } from '../product/product.module'

import { GroceryListComponent } from './grocery-list.component'

describe('HomePage', () => {
  let component: GroceryListComponent
  let fixture: ComponentFixture<GroceryListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListComponent ],
      imports: [IonicModule.forRoot(), ProductComponentModule, RouterModule.forRoot([])]
    }).compileComponents()

    fixture = TestBed.createComponent(GroceryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
