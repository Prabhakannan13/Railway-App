import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewalltrainsComponent } from './viewalltrains/viewalltrains.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewalltrainsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewalltrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
