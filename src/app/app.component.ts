import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  pageOffsetSelector,
  selectBookCollection,
  selectBooks, selectorGetPage,
  selectorPageOffset
} from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import {PageOffset} from "./book-list/books.model";
import {getPageOffset} from "./state/login.ruducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
 // offset1$: Observable<PageOffset> = this.store.select(pageOffsetSelector);
 // po$: Observable<PageOffset> = this.store.select(selectorPageOffset);
  po$ = this.store.select(pageOffsetSelector);

  //offset$= this.store.select(pageOffsetSelector);
  //offset$= Observable<PageOffset>;
  offset:PageOffset;
  page:string;
  page$ = this.store.select(selectorGetPage);

  //
  // offset(): Observable<PageOffset> {
  //   return pageOffsetSelector;
  // }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
    console.log("ngOnInit, page:");
    console.log(this.page$);
    console.log(`page:- ${this.page}`);
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
    .getBooks()
    .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    );

    this.page$.subscribe((p) => this.page = p);
    // this.store.pipe(map(state => {
    //       pageOffsetSelector(state)
    //
    //     }
    // ));

    //this.store.pipe(onselect(selectorPageOffset)).subscribe((po) => console.log(po));
    //this.offset = this.store.select(selectorPageOffset).subscribe();

     // this.po$.subscribe((offset) => {
     //   console.log( "this.po$.subscribe:")
     //   console.log(offset);
     //   this.page = offset.page;
     //   console.log(`this.page ${this.page}`)
     // });





  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/