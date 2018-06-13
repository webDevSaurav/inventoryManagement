import { Category } from "./categories.modal";
import { Brand } from "./brand.modal";

export class Product {

  constructor(public id : string,
              public name : string,
              public createdOn : Date,
              public quantity : Number,
              public category : Category,
              public brand : Brand
              )
  {
    this.id = id
    this.name = name
    this.createdOn = createdOn
    this.quantity = quantity
    this.category = category
    this.brand = brand
  }
}
