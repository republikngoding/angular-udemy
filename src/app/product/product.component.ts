import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AllProductService } from "../all-product/all-product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  titleProd = "Product Component";
  @Input() productName?: string;
  @Input() NamaHP?: string;
  @Output() productClicked = new EventEmitter();

  constructor(private AllProdSrv: AllProductService) {}

  ngOnInit() {}

  onClicked() {
    this.productClicked.emit();
  }

  onDelete() {
    this.AllProdSrv.deleteProduct(this.productName!);
  }
}
