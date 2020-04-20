import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { ProductDetailComponent } from './product-detail.component'
import { ViewProductPageRoutingModule } from './product-detail-routing.module'

describe('ViewProductPage', () => {
  let component: ProductDetailComponent
  let fixture: ComponentFixture<ProductDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [IonicModule.forRoot(), ViewProductPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
