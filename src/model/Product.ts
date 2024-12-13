export default class ProductModel {
  #id: number;
  #name: string;
  #price: number;
  #description: string;
  #image: string;

  constructor(id: number, name: string, price: number, description: string, image: string) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#description = description;
    this.#image = image;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get description() {
    return this.#description;
  }

  get image() {
    return this.#image;
  }

  static fromJson(json: any) {
    return new ProductModel(json.id, json.name, json.price, json.description, json.image);
  }

  
}