import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  transactions = [];
  selectedTransaction: any;
  transactionID: 0;
  shintoValue: 0;
  shintoOwned: 0;

  constructor(private _http: HttpClient){}

  shareTransactionHistory(){
    return this.transactions;
  }

  shareShintoValue(){
    return this.shintoValue;
  }

  shareShintoOwned(){
    return this.shintoOwned;
  }

  shareTransaction(num){
    this.transactions.forEach(element =>{  
      if(element.id === parseInt(num)){
        this.selectedTransaction = element;
      }
    });
    return this.selectedTransaction;
  }

  addToValueViaBuy(num){
    this.transactions.push({
      id: this.transactionID,
      action: "bought",
      amount: num,
      value: this.shintoValue
    });
    this.transactionID++;
    this.shintoValue += parseInt(num);
  }

  addToValueViaMine(num){
    this.transactions.push({
      id: this.transactionID,
      action: "mined",
      amount: num,
      value: this.shintoValue
    });
    this.transactionID++;
    this.shintoValue += parseInt(num);
  }

  buyShintos(num){
    this.shintoOwned += parseInt(num);
  }

  mineShintos(num){
    this.shintoOwned += parseInt(num);
  }
}
