import { Middleware } from "redux";
import { RootState } from "../store";

export const customMiddleWare: Middleware<{},RootState> = (store) => (next) => (action) => {
    if (!action.type) {
       return next(action);
    }
   console.log("type: ", action.type);
   console.log("payload: ", action.payload);
   console.log("previous state", store.getState());
   next(action);
   console.log("new state", store.getState());
} 