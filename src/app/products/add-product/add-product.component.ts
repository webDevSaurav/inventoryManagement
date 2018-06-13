import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { BrandService } from '../../brand.service';
import { CategoriesService } from '../../categories.service';
import { Brand } from '../../brand.modal';
import { Category } from '../../categories.modal';
import { Product } from '../../product.modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  brands : Brand[] = []
  categories : Category[] = []
  addNewCategory : Boolean = false
  addNewBrand : Boolean = false
  selectedCategory : string
  selectedName : string
  name : string
  quantity : number
  category : Category
  brand : Brand
  newCategory : string
  newBrand : string
  constructor(private productsService : ProductsService, private brandService : BrandService, private categoryService : CategoriesService) { }

  ngOnInit() {
    this.brands = this.brandService.brands
    this.brandService.brandChanged.subscribe(
      data => {
        this.brands = this.brandService.brands
      }
    )
    this.categories = this.categoryService.categories
    this.categoryService.categoriesChanged.subscribe(
      data => {
        this.categories = data
      }
    )
  }

  onChangeCategory(value){
    if(value === "newCategory"){
      this.addNewCategory = true
    } else{
      this.addNewCategory = false
      this.category = JSON.parse(value)
    }
  }

  onChangeBrand(value){
    if(value === "newBrand"){
      this.addNewBrand = true
    } else{
      this.addNewBrand = false
      this.brand = JSON.parse(value)
    }
  }

  onSubmit(){
    if(this.addNewCategory){
      const category = {id : String(Math.floor(Math.random() * 10000)), name : this.newCategory}
      this.category = category
      this.categoryService.addCategory(category)
    }
    if(this.addNewBrand){
      const brand = {id : String(Math.floor(Math.random() * 10000)), name : this.newBrand}
      this.brand = brand
      this.brandService.addBrand(brand)
    }
    const product = { id : String(Math.floor(Math.random() * 10000)), name :  this.name, createdOn :  new Date(), quantity :  this.quantity, category : this.category, brand : this.brand}
    this.productsService.addProduct(product)

    this.name = ""
    this.quantity = 1
    this.category = null
    this.brand = null
    this.newCategory = ""
    this.newBrand = ""
    this.addNewBrand = false
    this.addNewCategory = false
  }

  getStringifiedObj(obj){
    return JSON.stringify(obj)
  }

}
