import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  addProduct(newproduct){
    return this._http.post("/product", newproduct);
  }

  editProduct(product) {
    return this._http.put("/product/" + product.editId, product);
  }

  getProducts(){
    return this._http.get("/product/");
  }

  getOneProduct(productID) {
    return this._http.get("/product/" + productID);
  }

  deleteProduct(product) {
    return this._http.delete("/product/delete/" + product._id);
  }
}