import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  maxDate: any;

  constructor() {}

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 10);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
