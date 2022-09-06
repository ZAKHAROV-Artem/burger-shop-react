export interface IBurgerItem {
  id: number;
  isInCart: boolean;
  qty: number;
  name: string;
  restaurant: string;
  web: string;
  description: string;
  ingredients: string[];
  addresses: IBurgerRestaurantAdress;
}

interface IBurgerRestaurantAdress {
  addressId: number;
  number: string;
  line1: string;
  line2: string;
  postcode: string;
  coutry: string;
}

//====================REDUX========================
export interface BurgersState {
  burgers: IBurgerItem[];
  loading: boolean;
  error: null | string;
}

export type BurgerAction =
  | FetchBurgerAction
  | FetchBurgerSuccessAction
  | FetchBurgerErrorAction
  | GetState;

export enum BurgerActionTypes {
  FETCH_BURGERS = "FETCH_BURGERS",
  FETCH_BURGERS_SUCCESS = "FETCH_BURGERS_SUCCESS",
  FETCH_BURGERS_ERROR = "FETCH_BURGERS_ERROR",
  GET_STATE = "GET_STATE",
}
interface FetchBurgerAction {
  type: BurgerActionTypes.FETCH_BURGERS;
}
interface FetchBurgerSuccessAction {
  type: BurgerActionTypes.FETCH_BURGERS_SUCCESS;
  payload: IBurgerItem[];
}
interface FetchBurgerErrorAction {
  type: BurgerActionTypes.FETCH_BURGERS_ERROR;
  payload: string;
}
interface GetState {
  type: BurgerActionTypes.GET_STATE;
  payload: BurgersState;
}
