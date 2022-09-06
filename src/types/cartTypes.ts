import { IBurgerItem } from "./burgersTypes";
export interface ICart {
  cartItems: ICartItem[];
}

export interface ICartItem {
  id: number;
  burger: IBurgerItem;
}

// ==============REDUX==================

export type CartAction = AddItemAction | RemoveItemAction | AdjustCartItem;

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",

  ADJUST_CART_ITEM = "ADJUST_CART_ITEM",
}
interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: IBurgerItem;
}
interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: number;
}

interface AdjustCartItem {
  type: CartActionTypes.ADJUST_CART_ITEM;
  payload: { id: number; qty: number };
}
