import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { GroceryListComponent } from './grocery-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GroceryListComponent
      }
    ])
  ],
  declarations: [
    GroceryListComponent,
  ]
})
export class GroceriesPageModule {}
