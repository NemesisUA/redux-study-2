import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  cash: cashReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));