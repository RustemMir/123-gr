import {selectorGetPage} from "../books.selectors";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Archive} from "./grpc.model";

export const selectRow = createFeatureSelector<Archive>('grpcAddRow');
export const selectorRowGrpc = createSelector(
    selectRow,
    (state: Archive) => state
);
