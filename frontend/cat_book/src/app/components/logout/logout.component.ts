import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  token: any
  constructor(private apiUsers: UsersService, private router: Router) {
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    console.log(this.token)
    this.getUserByToken(this.token)
    this.logout(this.token)
  }

  getUserByToken(Token: any) {
    this.apiUsers.getUserByToken(Token).subscribe(
        data => {
        },
        error => {
          console.log(error);
        }
    );
  }

  logout(Token: any) {
    this.apiUsers.logoutUser(Token).subscribe(
        data => {
          console.log("Вышли")
          this.router.navigate([""])
        },
        error => {
          console.log(error);
        }
    )
  }

}
