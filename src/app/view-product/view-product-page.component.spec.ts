import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { ViewProductPage } from './view-product-page.component'
import { ViewProductPageRoutingModule } from './view-product-routing.module'

describe('ViewProductPage', () => {
  let component: ViewProductPage
  let fixture: ComponentFixture<ViewProductPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductPage ],
      imports: [IonicModule.forRoot(), ViewProductPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents()

    fixture = TestBed.createComponent(ViewProductPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
