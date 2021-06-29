import { combineReducers } from 'redux';
import cartReducer from "./Cart/cartReducers"
import tokenReducer from"./Token/tokenReducers"

export default  combineReducers({
    cartReducer,
    tokenReducer,
  });