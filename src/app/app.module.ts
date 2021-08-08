import { NgModule } from '@angular/core';
import { FormControlDirective, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoComponent } from './components/two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
