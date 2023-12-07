import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  // styleUrl: './app.component.css'
})
export class RegistrationComponent {

  constructor(private apiUsers: UsersService,
              private router: Router) {
  }

  formRegister = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    email: new FormControl(null)

  });
  ngOnInit(): void {

  }

  registration() {
    const formData= this.formRegister.value;
    this.createUser(formData.username, formData.password, formData.email);
  }

  createUser(Username: string | null | undefined, Password: string | null | undefined, Email: string | null | undefined){
    this.apiUsers.createUser(Username, Password, Email).subscribe(
        data => {
          console.log("create")
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
    );
  }

}
