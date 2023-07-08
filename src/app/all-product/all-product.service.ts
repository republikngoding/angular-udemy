import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AllProductService {
  private dataBajuSrv = ["Kemeja", "Calana"];
  productUpdate = new Subject();

  constructor() {}

  addProduct(productName: string) {
    this.dataBajuSrv.push(productName);
    this.productUpdate.next(this.dataBajuSrv);
  }

  getProduct() {
    return [...this.dataBajuSrv];
  }
}
