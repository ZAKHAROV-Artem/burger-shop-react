import { combineReducers } from "redux";
import burgerReducer from "./burgerReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
  burgers: burgerReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
