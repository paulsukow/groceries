import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PricesComponent implements OnInit {

  rows = [
    {
      name: 'Smith\'s',
      price: '$2/lb',
      organic: false
    },
    {
      name: 'Trader Joe\'s',
      price: '$3/lb',
      organic: false
    },
    {
      name: 'Natural Grocers',
      price: '$4/lb',
      organic: true
    },
  ]

  columns = [
    { name: 'Store', prop: 'name' },
    { name: 'Price/Unit', prop: 'price' },
    { name: 'Organic', prop: 'organic' },
  ]

  constructor() { }

  ngOnInit() {}

}


// <!--    <ion-grid>-->
// <!--      <ion-row>-->
// <!--        <ion-col>Store</ion-col>-->
// <!--        <ion-col>Price/Unit</ion-col>-->
// <!--        <ion-col>Organic</ion-col>-->
// <!--        <ion-col>Notes</ion-col>-->
// <!--      </ion-row>-->
// <!--      <ion-row>-->
// <!--        <ion-col>Smiths</ion-col>-->
// <!--        <ion-col>$2/lb</ion-col>-->
// <!--        <ion-col>False</ion-col>-->
// <!--        <ion-col>Bulk bins</ion-col>-->
// <!--      </ion-row>-->
// <!--      <ion-row>-->
// <!--        <ion-col>Trader Joe's</ion-col>-->
// <!--        <ion-col>$3/lb</ion-col>-->
// <!--        <ion-col>False</ion-col>-->
// <!--        <ion-col>Pre packaged</ion-col>-->
// <!--      </ion-row>-->
// <!--      <ion-row>-->
// <!--        <ion-col>Natural Grocers</ion-col>-->
// <!--        <ion-col>$4/lb</ion-col>-->
// <!--        <ion-col>True</ion-col>-->
// <!--        <ion-col>Pre packaged</ion-col>-->
// <!--      </ion-row>-->
// <!--    </ion-grid>-->
// <!--    <div>-->
// <!--      <div>Store Prices</div>-->
// <!--      <span>Smiths</span>-->
// <!--      <span>$2/lb</span>-->
// <!--      <span>Organic: False</span>-->
// <!--      <span>Pre Packaged</span>-->
// <!--    </div>-->
