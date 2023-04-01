import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./Admin/admin.reducer";
import { reducer as UserReducer } from "./User/user.reducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  user: UserReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
