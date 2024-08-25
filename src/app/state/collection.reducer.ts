import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialState,
    on(BooksActions.removeBook, (state, { bookId }) => {
      console.log(state.filter((id) => id !== bookId));
          return state.filter((id) => id !== bookId)
        }
    ),
    on(BooksActions.addBook, (state, { bookId }) => {
      if (state.indexOf(bookId) > -1) return state;
      var st = [...state, bookId];
      // return [...state, bookId];
      console.log("addBook - " + st);
      return st;
    })
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/