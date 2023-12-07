import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CatListComponent} from "./components/cat_list/cat_list.component";
import {HttpClientModule} from "@angular/common/http";
import {CatIdComponent} from "./components/cat_id/cat_id.component";
import {AddCatComponent} from "./components/add_cat/add_cat.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DelCatComponent } from './components/del-cat/del-cat.component';
import { UpdCatComponent } from './components/upd_cat/upd_cat.component';
import { DelCatPageComponent } from './components/del-cat-page/del-cat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatIdComponent,
    AddCatComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    UpdCatComponent,
    DelCatComponent,
    UpdCatComponent,
    DelCatPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
