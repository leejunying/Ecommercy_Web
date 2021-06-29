import {createStore} from "redux"

import combineReducers from"./CombineReducer.js"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
 


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
   };
 
const pReducer = persistReducer(persistConfig,combineReducers);
 

// export const store = createStore(cartReducer)

export   const store = createStore(pReducer);
export   const persistor =  persistStore(store)