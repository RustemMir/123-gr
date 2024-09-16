import {createReducer, on} from "@ngrx/store";
import {Archive} from "./grpc.model";
import {GrpcActions} from "./grpc.action";

export const initialState: Archive = {
  internalId: "",
  date: "",
  id: 0,
  name: "",
  email: "",
  gender: "",
  status: "",
};

export const grpcReducer = createReducer(
    initialState,
    on(GrpcActions.addRow, ( state, {row} ) => {
      return row
    })
);
