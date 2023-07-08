import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}

  onClicked() {
    this.productClicked.emit();
  }
}
