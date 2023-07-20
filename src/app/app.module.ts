import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { AllProductComponent } from "./all-product/all-product.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialDesign } from "./material";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { TrainingsComponent } from "./training/trainings/trainings.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StopTrainingComponent } from "./training/current-training/stop-training-component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AllProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    TrainingsComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [StopTrainingComponent]
})
export class AppModule { }
