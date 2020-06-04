import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import personsReducer from "./persons-reducer";


let reducers = combineReducers({
    persons: personsReducer
})

//
type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>


//extension
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store