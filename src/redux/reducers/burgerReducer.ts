import { IBurgerItem } from "./../../types/burgersTypes";
import {
  BurgerAction,
  BurgerActionTypes,
  BurgersState,
} from "../../types/burgersTypes";

const defaultState: BurgersState = {
  burgers: [],
  loading: false,
  error: null,
};

const burgerReducer = (
  state = defaultState,
  action: BurgerAction
): BurgersState => {
  switch (action.type) {
    case BurgerActionTypes.FETCH_BURGERS:
      return { burgers: [], loading: true, error: null };
    case BurgerActionTypes.FETCH_BURGERS_SUCCESS:
      return { burgers: action.payload, loading: false, error: null };
    case BurgerActionTypes.FETCH_BURGERS_ERROR:
      return { burgers: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
export default burgerReducer;
