import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { GroceryListComponent } from './grocery-list.component'

describe('HomePage', () => {
  let component: GroceryListComponent
  let fixture: ComponentFixture<GroceryListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([]),
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(GroceryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
