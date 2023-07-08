import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { AllProductComponent } from "./all-product/all-product.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ProductComponent, AllProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
