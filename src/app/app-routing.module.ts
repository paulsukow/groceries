import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'groceries', pathMatch: 'full' },
  { path: 'groceries', loadChildren: () => import('./modules/grocery-list/grocery-list.module').then(m => m.GroceriesPageModule)},
  {
    path: 'product/:id',
    loadChildren: () => import('./modules/product-detail/product-detail.module').then(m => m.ViewProductPageModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
