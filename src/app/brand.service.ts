import { Injectable } from '@angular/core';
import { Brand } from './brand.modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 brandChanged = new Subject<Brand[]>()
 brands : Brand[] = [
    {
      id : "1",
      name : "Samsung"
    },
    {
      id : "2",
      name : "LG"
    },
    {
      id : "3",
      name : "Godrej"
    },
    {
      id : "4",
      name : "Dhaua"
    },
    {
      id : "5",
      name : "Hikvision"
    }]
  constructor() { }

  getBrands(){
    return this.brands.slice()
  }

  addBrand(item : Brand){
    this.brands.push(item)
    this.brandChanged.next(this.brands.slice())
  }
}
