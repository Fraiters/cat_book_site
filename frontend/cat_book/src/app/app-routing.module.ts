import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatListComponent} from "./components/cat_list/cat_list.component";
import {CatIdComponent} from "./components/cat_id/cat_id.component";
import {AddCatComponent} from "./components/add_cat/add_cat.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DelCatComponent} from "./components/del-cat/del-cat.component";
import {UpdCatComponent} from "./components/upd_cat/upd_cat.component";
import {DelCatPageComponent} from "./components/del-cat-page/del-cat-page.component";

// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'cat_list', pathMatch: "full" },
  { path: 'cat_list', component: CatListComponent },
  { path: 'cat_id', component: CatIdComponent },
  { path: 'add_cat', component: AddCatComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'upd_cat', component: UpdCatComponent },
  { path: 'del_cat_page', component: DelCatPageComponent },
  { path: 'del_cat', component: DelCatComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
