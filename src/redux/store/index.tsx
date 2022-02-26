import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { foodCategoryReducer } from "../reducers/foodCategoryReducer";
import { ReduxStore } from "../../typings";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

// LOCAL STORAGE
const persistConfig = {
  key: "root",
  storage,
};

//REDUCER
const reducer = combineReducers({
  food: foodCategoryReducer,
});

//PERSIST REDUX STORE
const persistAllReducers = persistReducer(persistConfig, reducer);

//STORE
export const store = createStore(
  persistAllReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
