import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './products.service';
import { AppRouterModule } from './app-router/app-router.module';
import { CategoriesService } from './categories.service';
import { RemoveSpacePipe } from './remove-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    ProductListComponent,
    ProductComponent,
    RemoveSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [ProductsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
