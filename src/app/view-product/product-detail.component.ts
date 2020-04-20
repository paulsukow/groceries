import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../interfaces/product'
import { DataService } from '../services/data.service'

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.product = this.data.getProductById(parseInt(id, 10))
  }

  getBackButtonText() {
    const win = window as any
    const mode = win && win.Ionic && win.Ionic.mode
    return mode === 'ios' ? 'Inbox' : ''
  }
}
