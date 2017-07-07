import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';


import { app_routing } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
