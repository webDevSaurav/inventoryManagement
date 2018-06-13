import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../categories.modal';
import { Brand } from '../brand.modal';
import { Product } from '../product.modal';
import { ProductsService } from '../products.service';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories : Category[] = []
  brands : Brand[] = []
  products : Product[] = []
  selectedProducts : Product[] = []
  selectedBrands : String[] = []
  selectedProductsofBrandAndCategory : Product[] = []
  constructor(private categoriesService : CategoriesService, private productService : ProductsService, private brandService : BrandService) { }

  ngOnInit() {
    this.categories = this.categoriesService.categories
    this.categoriesService.categoriesChanged.subscribe(
      data => {
        this.categories = data
      }
    )
    this.products = this.productService.products
    this.productService.productsChanged.subscribe(
      data => {
        this.products = data
      }
    )
    this.brands = this.brandService.brands
    this.brandService.brandChanged.subscribe(
      data => {
        this.brands = data
      }
    )
  }

  getProductsAccordingToCategories(category){
    this.selectedProducts = []
    if(category.name === "all"){
      this.selectedProducts = this.products
    } else{
      this.products.forEach((product) => {
        if(product.category.name === category.name){
          this.selectedProducts.push(product)
        }
      })
    }
    this.getBrandsOfSelectedProducts()
  }

  getBrandsOfSelectedProducts(){
    this.selectedBrands = []
    this.selectedProducts.forEach((product) => {
      if(product.brand){
        if(this.selectedBrands.indexOf(product.brand.name) == -1){
          this.selectedBrands.push(product.brand.name)
        }
      }
    })
  }

  getProductsofBrandAndCategory(brand : String){
    this.selectedProductsofBrandAndCategory = []
    this.selectedProducts.forEach((product) => {
      if(product.brand){
        if(product.brand.name === brand){
          this.selectedProductsofBrandAndCategory.push(product)
        }
      }
    })

  }


}
