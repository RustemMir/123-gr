import {Book, PageOffset} from "../book-list/books.model";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageOffsetService {
  constructor() {}

  getPageOffset(): Observable<PageOffset> {
    return this.store;
  }
}
