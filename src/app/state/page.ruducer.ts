import {createReducer, on} from '@ngrx/store'
import {PageOffset} from "../book-list/books.model";
import {BooksActions} from "./books.actions";

export const initialState: string = "";

export const pageReducer = createReducer(
  initialState,
    on(BooksActions.getPage, (state, {pageId}) => {
      // state = pageId;
      return pageId;
    })
  );
