import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct: any;
  selectedProduct: any;
  paramID: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) {}
    
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.paramID = params["id"];
    });
    this.getSelectedProduct();
  }

  onSubmit(){
    let editProductObservable = this._httpService.editProduct(this.editProduct);
    editProductObservable.subscribe(data =>
      console.log("Editted Product", data)
    );
    this.editProduct = {title: "", value: "", imageURL: ""};
    this._router.navigate(["/products"]);
  }

  getSelectedProduct(){
    let observable = this._httpService.getOneProduct(this.paramID);
    observable.subscribe(data => {
      this.selectedProduct = data["data"][0];
      this.editProduct = {
        editID: this.paramID,
        title: this.selectedProduct.title,
        value: this.selectedProduct.value,
        price: this.selectedProduct.price,
        imageURL: this.selectedProduct.imageURL
      };
    });
  }
}
