import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { Userlist } from './components/user/user-list/userlist.component';
import { UserMain } from './components/user/user-main/user-main.component';
import { UserForm } from './components/user/user-form/user-form.component';
import { Header } from './components/layout/header/header.component';
import { Footer } from './components/layout/footer/footer.component';
import { Navbar } from './components/layout/navbar/navbar.component';
import { Home } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Modal } from './components/commons/modal/modal.component';
import { Login } from './components/login/login.component';
import { UserService } from './components/services/user.service';
import { AdminService } from './components/services/admin.service';
import { ErrorComponent } from './components/commons/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Userlist,
    UserMain,
    UserForm,
    Header,
    Footer,
    Navbar,
    Home,
    PageNotFoundComponent,
    Modal,
    Login,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
