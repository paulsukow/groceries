import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ProductDetailComponent } from './product-detail/product-detail.component'

import { IonicModule } from '@ionic/angular'

import { ViewProductPageRoutingModule } from './view-product-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProductPageRoutingModule
  ],
  declarations: [ProductDetailComponent]
})
export class ViewProductPageModule {}
