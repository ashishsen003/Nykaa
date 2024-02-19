import {combineReducers, legacy_createStore, applyMiddleware} from "redux"
import {reducer as authReducer} from "./authentication/reducer"
import {reducer as productsReducer} from "./products/reducer"
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({authReducer, productsReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
