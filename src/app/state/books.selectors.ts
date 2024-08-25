import { createSelector, createFeatureSelector } from '@ngrx/store';
import {Book, PageOffset} from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
    ReadonlyArray<string>
    >('collection');

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
      console.log("selectBookCollection = createSelector");
      return collection.map((id) => books.find((book) => book.id === id)!);
    }
);

export const selectOffset = createFeatureSelector<PageOffset>('loginReducer');

export const pageOffsetSelector = createSelector(
    selectOffset, (offset) => {
  console.log("offset - :", offset.page);
  return offset;
})

const selectPageOffset = (state: PageOffset) => state;
export const selectorPageOffset = createSelector(
    selectPageOffset,
    (state: PageOffset) => state
);

export const selectGetPage = createFeatureSelector<string>('page');
export const selectorGetPage = createSelector(
    selectGetPage,
    (state: string) => state
);
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/