import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ListaComponent} from './app.component';
import {environment} from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {ListaProductos} from './Componentes/lista-compra/lista-compra';
import {StoreList} from './Componentes/compra/compra';


@NgModule({
  declarations: [
    ListaComponent,
    StoreList,
    ListaProductos
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListaComponent]
})
export class AppModule { }
