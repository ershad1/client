import {Component, OnInit} from '@angular/core';
import {Login} from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login('', '');

  onSubmit() {

    console.log("Email address:" + this.model.email + "Password:" + this.model.password);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
