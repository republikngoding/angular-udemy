import { Component, OnDestroy, OnInit } from "@angular/core";
import { AllProductService } from "./all-product.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-all-product",
  templateUrl: "./all-product.component.html",
  styleUrls: ["./all-product.component.scss"],
})
export class AllProductComponent implements OnInit, OnDestroy {
  productName?: string;
  productHp?: string;
  isDisabled = false;
  products = ["Buku", "Pensil"];
  dataHp = ["xiaomi", "samsung"];
  dataBaju: Array<string> = [];
  private productBajuSubscription?: Subscription;

  constructor(private AllProduct: AllProductService) {
    // this.dataBaju = this.AllProduct.getProduct();
    setTimeout(() => {
      // this.dataBaju = this.AllProduct.getProduct();
    }, 3000);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataBaju = this.AllProduct.getProduct();
    this.productBajuSubscription = this.AllProduct.productUpdate.subscribe(
      () => {
        this.dataBaju = this.AllProduct.getProduct();
        console.log("ini di load juga");
      }
    );
  }

  ngOnDestroy(): void {
    this.productBajuSubscription?.unsubscribe();
    console.log("unsubscribe");
  }

  onAddProduct() {
    this.products.push(this.productName!);
  }

  onAddProductHape() {
    this.dataHp.push(this.productHp!);
  }

  onRemoveProduct(productitem: string) {
    this.products = this.products.filter((p) => p !== productitem);
  }

  onRemoveProductBaju(productkita: string) {
    console.log(productkita);
    // this.products = this.products.filter((p) => p !== productkita);
    const index: number = this.dataBaju.indexOf(productkita);
    if (index !== -1) {
      this.dataBaju.splice(index, 1);
    }
  }

  onAddProductForm(form: any) {
    console.log(form);
    if (form.valid) {
      // this.dataBaju.push(form.value.productName);
      this.AllProduct.addProduct(form.value.productName);
      this.productName = "";
    }
  }
}
