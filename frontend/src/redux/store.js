import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./auth/reducer";
import usersReducer from "./users/reducer";
import moviesReducer from "./movies/reducer";
import loaderReducer from "./loader/reducer";
import { apiMiddeleware } from "./api/middlewares";
import membersReducer from "./members/reducer";
import modalReducer from "./modal/reducer";
import { setSessionTime } from "./auth/middlewares";
// import { logger } from "redux-logger";

const rootReducer = combineReducers({
   auth: authReducer,
   users: usersReducer,
   movies: moviesReducer,
   members: membersReducer,
   globalLoader: loaderReducer,
   modal: modalReducer

})

const middaleWares = [apiMiddeleware, thunk, setSessionTime]



export const store = createStore(rootReducer, applyMiddleware(...middaleWares))