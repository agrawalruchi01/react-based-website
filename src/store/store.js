
import { compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [customMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined , composedEnhancers);

export const persistor = persistStore(store);