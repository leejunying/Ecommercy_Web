import { createStore, applyMiddleware } from "redux";

import dataReducers from "./Data/dataReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga/saga";
import { GET_DATA } from "./Data/dataTypes";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
};

const pReducer = persistReducer(persistConfig, dataReducers);

// export const store = createStore(cartReducer)

export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
