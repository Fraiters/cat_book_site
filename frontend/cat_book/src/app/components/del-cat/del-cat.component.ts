import { Component } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-del-cat',
  templateUrl: './del-cat.component.html',
  styleUrl: './del-cat.component.css'
})
export class DelCatComponent {
  cat_id: any
  token: any
  constructor(private catApi: CatsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cat_id = localStorage.getItem('cat_id')
    this.token = localStorage.getItem('my_token')
    console.log(this.cat_id, this.token)
    this.destroyCat(this.cat_id, this.token);
  }

  destroyCat = (Id: any, Token: any) => {
    this.catApi.deleteCat(Id, Token).subscribe(
      data => {
        this.router.navigate(['/cat_list'])
      },
      error => {
        console.log(error);
      }
    );

  }

}
