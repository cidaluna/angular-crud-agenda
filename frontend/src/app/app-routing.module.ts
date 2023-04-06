import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [
  {
  path : "",
  component: HomeComponent 
  },
  {
  path : "contatos",
  component: ProductCrudComponent 
  },
  {
  path : "contatos/create",
  component: ProductCreateComponent 
  },
  {
  path : "contatos/update/:id",
  component: ProductUpdateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
