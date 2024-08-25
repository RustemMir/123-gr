import {createReducer, on} from '@ngrx/store'
import {PageOffset} from "../book-list/books.model";
import {BooksActions} from "./books.actions";

export const initialState: PageOffset = {page: "0", offset: "0"}

export const loginReducer = createReducer(
  initialState,
  on(BooksActions.paginationChanged, (state, pageOffset) => {
    console.log("login.reducer - " + pageOffset.page);
    console.log("login.reducer state:");
    console.log(state);

       return pageOffset;
      }),
    on(BooksActions.pageChang, (state, {pageOffset}) => {
      state = pageOffset;
      return pageOffset;
    }),
  );

export const getPageOffset = (state: PageOffset) => {
  console.log(state);
  return state
};