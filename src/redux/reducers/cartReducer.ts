import { useGetBurger } from "./../../hook/useGetBurger";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { CartAction, CartActionTypes, ICart } from "./../../types/cartTypes";

const defaultState: ICart = {
  cartItems: [],
};

const cartReducer = (state = defaultState, action: CartAction): ICart => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const burger = action.payload;

      return {
        cartItems: [
          ...state.cartItems,
          { id: burger.id, burger: { ...burger, isInCart: true, qty: 1 } },
        ],
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case CartActionTypes.ADJUST_CART_ITEM:
      const cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, burger: { ...item.burger, qty: action.payload.qty } }
          : item
      );

      return { cartItems: cartItems };

    default:
      return state;
  }
};
export default cartReducer;
