import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { Prueba3Component } from './components/prueba3/prueba3.component';
import { UserlistComponent } from './components/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba2Component,
    Prueba3Component,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
