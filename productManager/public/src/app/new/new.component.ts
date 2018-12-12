import { Component, OnInit } from '@angular/core';
import{ HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  constructor(private _router: Router, private _httpService: HttpService) {}
  
  ngOnInit() {
    this.newProduct = { title: "", price: "", imageURL: ""};
  }

  onSubmit(){
    let newProductObservable = this._httpService.addProduct(this.newProduct);
    newProductObservable.subscribe(data=>
      console.log("Got our new product!", data)
    );
    this.newProduct = { title: "", price: "", imageURL: ""};
  }

  onCancel(){
    this._router.navigate(["/products"]);
  }

}
