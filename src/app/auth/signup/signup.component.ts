import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  maxDate: any;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 10);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authSrv.registerUser(
      {
        email: form.value.email,
        password: form.value.password
      });
  }
}
