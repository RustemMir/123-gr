import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book, PageOffset} from './books.model';
import {BooksActions} from "../state/books.actions";
import {GoogleBooksService} from "./books.service";
import { Store } from '@ngrx/store';
import {pageOffsetSelector} from "../state/books.selectors";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  @Input() po: PageOffset;
  @Input() page: string;

  pageOffset: PageOffset = {page:"0", offset: "0"};


  onNext(page: string, offset: string, pageId:string) {
    this.pageOffset = {page, offset};
    var pageOffset1 = {page: page, offset: offset};
    console.log("onNext - :" + pageOffset1);
    console.log(pageOffset1);
    this.store.dispatch(BooksActions.paginationChanged(pageOffset1));

    this.store.dispatch(BooksActions.getPage({pageId}));


  };

  constructor(private booksService: GoogleBooksService, private store: Store){
    console.log("book.list.component:");
    console.log(this.page);
  };

}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/