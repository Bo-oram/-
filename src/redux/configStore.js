// import { createStore, combineReducers,applyMiddleware, compose } from "redux"
// import thunk from "redux-thunk";
// import currentUser from "./modules/CurrentUser"

// const middlewares = [thunk];
// const rootReducer = combineReducers({currentUser});

// const enhancer = applyMiddleware(...middlewares);

// const store = createStore(rootReducer, enhancer);

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import Users from "./modules/Users"
import post from "./modules/postSlice";


const store = configureStore({
    reducer:{
        Users,
        post
    }
})

export default store;