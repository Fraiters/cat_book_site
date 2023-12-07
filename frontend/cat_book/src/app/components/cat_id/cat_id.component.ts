import {Component, Input, OnInit} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {CatListComponent} from "../cat_list/cat_list.component";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-cat_id',
  templateUrl: './cat_id.component.html',
  // styleUrl: './app.component.css'
})
export class CatIdComponent {//extends CatListComponent implements OnInit{
  cat_id: string | null
  cat_obj: any
  user: any
  token: any

  constructor(private apiCats: CatsService,
              private apiUsers: UsersService,){
              //router: Router) {
    //super(apiCats, apiUsers, router);
  }

  ngOnInit(): void {
    this.cat_id = localStorage.getItem("cat_id")
    this.token = localStorage.getItem("my_token")
    this.getUserByToken(this.token)
    this.getCatById(this.cat_id);
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
  getCatById = (Id: any) => {
    this.apiCats.getCatById(Id).subscribe(
      data => {
        this.cat_obj = data
        // console.log(this.cat_obj.photo)
      },
      error => {
        console.log(error);
      }
    );
  }
}
