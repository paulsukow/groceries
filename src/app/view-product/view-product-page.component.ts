import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../interfaces/product'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product-page.component.html',
  styleUrls: ['./view-product-page.component.scss'],
})
export class ViewProductPage implements OnInit {
  public product: Product

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

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
