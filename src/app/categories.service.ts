import { Injectable } from '@angular/core';
import { Category } from './categories.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesChanged = new Subject<Category[]>()
  categories : Category[] = [
    {
      id : "1",
      name : "all"
    },
    {
      id : "2",
      name : "cctv"
    },
    {
      id : "3",
      name : "fire extinguisher"
    },
    {
      id : "4",
      name : "video door phone"
    },
    {
      id : "5",
      name : "hydrants"
    },
    {
      id : "6",
      name : "extras"
    }]
  constructor() { }

  getCategories(){
    return this.categories.slice()
  }

  addCategory(category : Category){
    this.categories.push(category)
    this.categoriesChanged.next(this.categories.slice())
  }
}
