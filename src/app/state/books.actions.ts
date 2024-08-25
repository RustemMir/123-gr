import { createActionGroup, props } from '@ngrx/store';
import {Book, PageOffset} from '../book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
    'Pagination Changed': (pageOffset: PageOffset) => (pageOffset),
    'Page Chang': props<{pageOffset: PageOffset}>(),
    'Get Page': props<{ pageId: string }>()
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/