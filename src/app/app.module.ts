import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ListaComponent} from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListaComponent]
})
export class AppModule { }
