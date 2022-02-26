import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { foodCategoryReducer } from "../reducers/foodCategoryReducer";
import { ReduxStore } from "../../typings";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

// INITIAL STATE
export const initialState: ReduxStore = {
  food: {
    foodlist: [],
    loading: false,
  },
};

//REDUCER
const reducer = combineReducers({
  food: foodCategoryReducer,
});

//STORE
export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
