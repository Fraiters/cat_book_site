import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private apiUsers: UsersService,
              private router: Router ) {
  }

  formLogin = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),

  });
  login() {
    console.log("Start login")
    this.getToken(
        this.formLogin.value.username,
        this.formLogin.value.password
    );
  }

  ngOnInit(): void {
  }

  getToken(Username: string | null | undefined, Password: string | null | undefined) {
    this.apiUsers.getToken(Username, Password).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('my_token', data.auth_token);
          this.router.navigate([""])
        },
        error => {
          console.log(error);
        }
    )
  }

}
