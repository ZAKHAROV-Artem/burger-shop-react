import { IBurgerItem } from "./../../types/burgersTypes";
import { CartActionTypes } from "./../../types/cartTypes";

export const addCartItem = (burger: IBurgerItem) => {
  return { type: CartActionTypes.ADD_ITEM, payload: burger };
};
export const removeCartItem = (id: number) => {
  return { type: CartActionTypes.REMOVE_ITEM, payload: id };
};
export const adjustCartItemCount = (id: number, qty: number) => {
  return { type: CartActionTypes.ADJUST_CART_ITEM, payload: { id, qty } };
};
