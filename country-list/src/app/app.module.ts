import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
