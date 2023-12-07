import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user: any

  constructor(private apiUsers: UsersService) {
  }
  ngOnInit(): void {
    this.getUserByToken(localStorage.getItem('my_token'));
  }

  getUserByToken(Token: any) {
    this.apiUsers.getUserByToken(Token).subscribe(
        data => {
          this.user = data;
        },
        error => {
          console.log(error);
        }
    );
  }
}
