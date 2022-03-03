import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Userlist } from './components/userlist/userlist.component';
import { UserMain } from './components/user-main/user-main.component';
import { UserForm } from './components/user-form/user-form.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { Navbar } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Userlist,
    UserMain,
    UserForm,
    Header,
    Footer,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
