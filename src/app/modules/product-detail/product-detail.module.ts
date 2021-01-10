import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { PricesComponent } from './prices/prices.component'
import { ProductDetailComponent } from './product-detail.component'

import { IonicModule } from '@ionic/angular'

import { ViewProductPageRoutingModule } from './product-detail-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProductPageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    ProductDetailComponent,
    PricesComponent
  ]
})
export class ViewProductPageModule {}
