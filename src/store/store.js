
import { compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const customMiddleWare = (store) => (next) => (action) => {
    if (!action.type) {
       return next(action);
    }
   console.log("type: ", action.type);
   console.log("payload: ", action.payload);
   console.log("previous state", store.getState());
   next(action);
   console.log("new state", store.getState());
} 

const middleWares = [customMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined , composedEnhancers);