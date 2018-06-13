import { Injectable } from '@angular/core';
import { Product } from './product.modal';
import { CategoriesService } from './categories.service';
import { BrandService } from './brand.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsChanged = new Subject<Product[]>()
  constructor(private categoryService : CategoriesService, private brandService : BrandService){ }
  products : Product[] = [
    {
      id : "1",
      name : "CCTV Camera",
      createdOn : new Date(),
      quantity : 20,
      category : this.categoryService.categories[1],
      brand : this.brandService.brands[0]
    },
    {
      id : "2",
      name : "DFDFDFDF",
      createdOn : new Date(),
      quantity : 10,
      category : this.categoryService.categories[2],
      brand : this.brandService.brands[1]
    },
    {
      id : "3",
      name : "asasasas",
      createdOn : new Date(),
      quantity : 5,
      category : this.categoryService.categories[2],
      brand : this.brandService.brands[1]
    },
    {
      id : "4",
      name : "xyz",
      createdOn : new Date(),
      quantity : 15,
      category : this.categoryService.categories[1],
      brand : this.brandService.brands[1]
    },
    {
      id : "5",
      name : "abc",
      createdOn : new Date(),
      quantity : 20,
      category : this.categoryService.categories[3],
      brand : this.brandService.brands[2]
    },
    {
      id : "6",
      name : "moq",
      createdOn : new Date(),
      quantity : 40,
      category : this.categoryService.categories[3],
      brand : this.brandService.brands[1]
    },
    {
      id : "7",
      name : "sdsdsd",
      createdOn : new Date(),
      quantity : 40,
      category : this.categoryService.categories[3],
      brand : this.brandService.brands[1]
    },
    {
      id : "6",
      name : "llll",
      createdOn : new Date(),
      quantity : 40,
      category : this.categoryService.categories[4],
      brand : this.brandService.brands[3]
    },
    {
      id : "7",
      name : "qssajsas",
      createdOn : new Date(),
      quantity : 10,
      category : this.categoryService.categories[4],
      brand : this.brandService.brands[4]
    },
    {
      id : "8",
      name : "ajaaja",
      createdOn : new Date(),
      quantity : 32,
      category : this.categoryService.categories[2],
      brand : this.brandService.brands[1]
    },
    {
      id : "9",
      name : "asasasas",
      createdOn : new Date(),
      quantity : 50,
      category : this.categoryService.categories[5],
      brand : this.brandService.brands[1]
    },
    {
      id : "10",
      name : "jjjasagsagsa",
      createdOn : new Date(),
      quantity : 40,
      category : this.categoryService.categories[5],
      brand : this.brandService.brands[5]
    }
  ]

  getProducts(){
    return this.products.slice()
  }

  addProduct(product :Product){
    this.products.push(product)
    this.productsChanged.next(this.products.slice())
  }


}
