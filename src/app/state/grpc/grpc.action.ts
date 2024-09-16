import {createActionGroup, props} from "@ngrx/store";
import {Archive} from "./grpc.model";
import {PageOffset} from "../../book-list/books.model";

export const GrpcActions = createActionGroup({
  source: 'Grpc',
  events: {
    'Add Row': props<{row: Archive}>(),
  },
});