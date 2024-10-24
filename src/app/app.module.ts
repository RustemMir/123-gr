import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import {loginReducer} from "./state/login.ruducer";
import {CommonModule} from "@angular/common";
import {pageReducer} from "./state/page.ruducer";
import {GrpcCoreModule} from "@ngx-grpc/core";
import {GrpcWebClientModule} from "@ngx-grpc/grpc-web-client";
import {GrpcComponent} from "./grpc/grpc.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {grpcReducer} from "./state/grpc/grpc.reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      loginReducer: loginReducer,
      page: pageReducer,
      grpcAddRow: grpcReducer,
    }),
    HttpClientModule,
    CommonModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'http://localhost:8080' },
    }),
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent, GrpcComponent, TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/