import {createStore, combineReducers, applyMiddleware } from "redux";
import  thunk from "redux-thunk"
import board from "./modules/board";
import write from "./modules/write";
import addList from "./modules/board";
import modify from "./modules/modify"

const middlewares = [thunk]
const rootReducer = combineReducers ({board, write,addList,modify});
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer);

export default store